import {el} from '@fxi/el';
import {onNextFrame} from '../anime_frame/index.js';
import './style.css';
import {greenRed} from './colors.js';

const settings = {
  radius: 100,
  fg_stroke: 2,
  fg_stroke_color: 'rgba(53,53,53,0.5)',
  bg_stroke: 4,
  bg_stroke_color: 'rgba(53,53,53,0.1)'
};

export {settings};

/**
 * Build a simple radial gauge canvas element
 * @param {String|Element} selector  : the container selector or element to insert the radial gauge
 * @param {Object} c config
 * @param {Integer} c.radius Radius of the radial input, in pixel
 * @param {Integer} c.stroke Width of the stroke in pixel
 */
class RadialGauge {
  constructor(elTarget, opt) {
    let rp = this;
    rp.elTarget = elTarget;
    rp.opt = Object.assign({}, settings, opt);
    rp.init();
  }

  init() {
    this.build();
    this.updateContext();
    this.update(0, 0);
  }

  setMsg(str, color) {
    const rp = this;
    rp.elMsg.innerText = str;
    rp.elMsg.style.color = color || '#000';
    rp.fitMsg();
  }

  setMsgError(str) {
    const rp = this;
    rp.elMsgError.title = str;
    rp.elMsgError.innerText = "🐞";
  }

  destroy() {
    let rp = this;
    if (rp.elTarget && rp.el) {
      rp.el.remove();
    }
  }

  build() {
    let rp = this;
    rp.elCanvas = el('canvas', {
      style: {
        width: rp.opt.radius * 2 + 'px',
        height: rp.opt.radius * 2 + 'px'
      }
    });
    rp.elMsg = el('span', {
      style: {
        position: 'absolute',
        whiteSpace: 'nowrap',
        'will-change': 'transform'
      }
    });
    rp.elMsgError = el('span', {
      style: {
        position: 'absolute',
        top: '70%',
        fontSize: '1em',
        whiteSpace: 'nowrap'
      }
    });
    rp.el = el(
      'div',
      {
        class: 'radial-gauge'
      },
      rp.elCanvas,
      rp.elMsg,
      rp.elMsgError
    );
    rp.elTarget.appendChild(rp.el);
    window.rp = rp;
  }

  updateContext() {
    let rp = this;
    let dpr = window.devicePixelRatio || 1;
    let rect = rp.elCanvas.getBoundingClientRect();
    rp.rect = rect;
    rp.elCanvas.width = rect.width * dpr;
    rp.elCanvas.height = rect.height * dpr;
    let ctx = rp.elCanvas.getContext('2d');
    ctx.scale(dpr, dpr);
    rp.ctx = ctx;
  }

  fitMsg() {
    let rp = this;
    rp.elMsg.style.transform = ``;
    const rM = rp.elMsg.getBoundingClientRect();
    const rC = rp.elCanvas.getBoundingClientRect();
    const r = rC.width / rM.width;
    rp.elMsg.style.transform = `scale(${r * 0.55})`;
  }
  update(p, str, strError) {
    let rp = this;

    if (isFinite(str * 1)) {
      str = Math.round(str);
    }
    if (typeof str === 'undefined') {
      str = `${Math.round(p)} %`;
    }

    if(typeof strError !== 'undefined'){
      rp.setMsgError(strError);
    }

    onNextFrame(() => {
      const radius = rp.opt.radius;

      rp.updateContext();
      rp.clear();

      /**
       * bg
       */
      rp.ctx.lineWidth = rp.opt.bg_stroke;
      rp.ctx.strokeStyle = rp.opt.bg_stroke_color;
      rp.ctx.beginPath();
      rp.ctx.arc(radius, radius, radius - rp.opt.bg_stroke / 2, 0, 2 * Math.PI);
      rp.ctx.stroke();
      /**
       * fg
       */
      rp.ctx.lineWidth = rp.opt.fg_stroke;
      rp._fg_color = p ? greenRed(p) : rp.opt.fg_stroke_color;
      rp.ctx.strokeStyle = rp._fg_color;

      rp.ctx.translate(radius, radius);
      rp.ctx.rotate((-90 * Math.PI) / 180);
      rp.ctx.translate(-radius, -radius);

      rp.ctx.beginPath();
      rp.ctx.arc(
        radius,
        radius,
        radius - rp.opt.fg_stroke,
        0,
        (p / 100) * 2 * Math.PI
      );
      rp.ctx.stroke();
      rp.setMsg(str, rp._fg_color);
    });
  }

  clear() {
    let rp = this;
    rp.ctx.clearRect(0, 0, rp.elCanvas.width, rp.elCanvas.height);
  }
}
export {RadialGauge};
