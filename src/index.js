import 'regenerator-runtime/runtime';

import {getDelta} from './technis_api/index.js';
import {RadialGauge} from './radial_gauge/index.js';

const elCount = document.getElementById('count');
const rect = elCount.getBoundingClientRect();
const maxPeople = 1500;
const rg = new RadialGauge(elCount, {
  radius: rect.width / 2,
  fg_stroke: 3.5,
  bg_stroke: 7
});

/**
 * Main
 */

update().catch((e) => {
  rg.update(0, 'Erreur 😬');
  console.error(e);
});
/**
 * Helpers
 */
async function update(e) {
  const date = e && e.target.value ? new Date(e.target.value) : new Date();
  const res = await getDelta(date);
  if (!res) {
    rg.update(0, 0);
  } else {
    rg.update((res.count.delta / maxPeople) * 100, res.count.delta);
  }
  if (res.status.code !== 0) {
    rg.update(0,'🐞', res.status.msg);
    console.warn(res.status.msg);
  }
}
window.rg = rg;
/*{*/
  //0: Everything all right
  //1: Tiles missing
  //2: Connection lost
  //3: Pad is rebooting
  //4: Firmware is updating
/*}*/
