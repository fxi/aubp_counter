parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QVnC":[function(require,module,exports) {
var t=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e,n){var o=r&&r.prototype instanceof v?r:v,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(t,r,e){var n=f;return function(o,i){if(n===l)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return N()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=_(a,e);if(c){if(c===y)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===f)throw n=p,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=l;var u=h(t,r,e);if("normal"===u.type){if(n=e.done?p:s,u.arg===y)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=p,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(n){return{type:"throw",arg:n}}}t.wrap=u;var f="suspendedStart",s="suspendedYield",l="executing",p="completed",y={};function v(){}function d(){}function g(){}var m={};m[i]=function(){return this};var w=Object.getPrototypeOf,L=w&&w(w(G([])));L&&L!==e&&n.call(L,i)&&(m=L);var x=g.prototype=v.prototype=Object.create(m);function E(t){["next","throw","return"].forEach(function(r){t[r]=function(t){return this._invoke(r,t)}})}function b(t,r){var e;this._invoke=function(o,i){function a(){return new r(function(e,a){!function e(o,i,a,c){var u=h(t[o],t,i);if("throw"!==u.type){var f=u.arg,s=f.value;return s&&"object"==typeof s&&n.call(s,"__await")?r.resolve(s.__await).then(function(t){e("next",t,a,c)},function(t){e("throw",t,a,c)}):r.resolve(s).then(function(t){f.value=t,a(f)},function(t){return e("throw",t,a,c)})}c(u.arg)}(o,i,e,a)})}return e=e?e.then(a,a):a()}}function _(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,_(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function j(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function O(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function G(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:N}}function N(){return{value:r,done:!0}}return d.prototype=x.constructor=g,g.constructor=d,g[c]=d.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===d||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},E(b.prototype),b.prototype[a]=function(){return this},t.AsyncIterator=b,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new b(u(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},E(x),x[c]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=G,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),O(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;O(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:G(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}},t}("object"==typeof module?module.exports:{});try{regeneratorRuntime=t}catch(r){Function("r","regeneratorRuntime = r")(t)}
},{}],"plUd":[function(require,module,exports) {
"use strict";function n(n,t,e,r,a,o,i){try{var s=n[o](i),u=s.value}catch(c){return void e(c)}s.done?t(u):Promise.resolve(u).then(r,a)}function t(t){return function(){var e=this,r=arguments;return new Promise(function(a,o){var i=t.apply(e,r);function s(t){n(i,a,o,s,u,"next",t)}function u(t){n(i,a,o,s,u,"throw",t)}s(void 0)})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getDelta=r;var e={endPoint:"https://api.mytechnis.com/api",idZone:355,idEvent:296,idInstall:212,idPad:"C_3-0_00212",token:"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJPQ3gxdlJzdFNmZVc4S003SUtHcFNzV2V4QU8yIiwiaWF0IjoxNTkxNDM5MTM5LCJjbGFpbXMiOnsiaXNBcGlLZXkiOnRydWV9fQ.om6lgfG7lVNzSIfTtkgsORyillVnfiRtGpqdpu1DNvj-KUbXRBHwiNUal7HRNtvq3A71631TZU8sxmtTfYfpLKGeRwV5vgweSxJkmSJhBFQsjaOG9D9bUPzLqQmfzu7paP2NotxYf2WSoU02gkTLnd0c33CvavB-muCmp8Ei4VVfWsIwhDoArRTavtaJVF1zS30lD6DRF_WKe4W7UfZn_wlKpT6fpTZlbh3A_Gbve3z_AjnazG_aRO2qN8r5TGYd5qLx1re43Q_vvWjf6r6aw5Ps-OpdRL7vVhIDpyQ9ZQn0uL3ubAp8IB3IFbRM8lqeYSF37K5_fgA8QfKa-V4o7Q"};function r(n){return a.apply(this,arguments)}function a(){return(a=t(regeneratorRuntime.mark(function n(t){var r,a,i,s,u,c,d,p,f;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=new Date(t),a=r.setHours(7,0,0,0),i=r.setHours(21,0,0,0),s="{\nzoneById(zoneId: ".concat(e.idZone,"){\n    id\n    name\n    installation { address }\n    counts(\n    eventId: ").concat(e.idEvent,", \n    dates:  [").concat(a,", ").concat(i,"]) { \n    dateBegin \n    dateEnd \n    eventId \n    periodId \n    in \n    out\n    }\n  }\n}"),u='{\n  padById(padId: "'.concat(e.idPad,'") {\n    id passage { id name } status { statusCode msg }\n  }\n}'),n.next=7,o(s);case 7:return c=n.sent,n.next=10,o(u);case 10:return d=n.sent,(p=c.zoneById.counts[0])&&(p.delta=p.in-p.out),f=d.padById.status,n.abrupt("return",{count:p,status:f});case 15:case"end":return n.stop()}},n)}))).apply(this,arguments)}function o(n){return i.apply(this,arguments)}function i(){return(i=t(regeneratorRuntime.mark(function n(t){var r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(e.endPoint,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e.token)},body:JSON.stringify({query:t})});case 2:return r=n.sent,n.next=5,r.json();case 5:if((a=n.sent).data||!a.errors){n.next=8;break}throw new Error(JSON.stringify(a.errors));case 8:return n.abrupt("return",a.data);case 9:case"end":return n.stop()}},n)}))).apply(this,arguments)}
},{}],"cRin":[function(require,module,exports) {
var define;
var n;!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof n&&n.amd?n(["exports"],e):e(t.El={})}(this,function(n){function t(n){return!!n&&"object"==typeof n&&!Array.isArray(n)}function e(n){return!!n&&"object"==typeof n&&Array.isArray(n)}function r(n){return"string"==typeof n}function o(n){return n instanceof Function}function i(n){return n instanceof Element}n.el=function(n){for(var c=[],f=arguments.length-1;f-- >0;)c[f]=arguments[f+1];var u,a=document.createElement(n);return c.forEach(function(n){t(n)&&!e(n)&&Object.keys(n).forEach(function(i){u=n[i],"on"==i&&e(u)&&r(u[0])&&o(u[1])?a.addEventListener(u[0],u[1]):"on"==i&&t(u)?Object.keys(u).forEach(function(n){o(u[n])&&a.addEventListener(n,u[n])}):"innerText"==i&&r(u)?a.innerText=u:"dataset"!=i&&"style"!=i||!t(u)?"class"==i&&e(u)?u.forEach(function(n){return a.classList.add(n)}):a.setAttribute(i,n[i]):Object.keys(u).forEach(function(n){a[i][n]=u[n]})}),e(n)&&n.forEach(function(n){i(n)&&a.appendChild(n)}),i(n)&&a.appendChild(n),n instanceof Promise?n.then(s):s(n)}),a;function s(t){!function(n){return r(n)&&/(<([^>]+)>)/i.test(n)}(t)&&"style"!==n?r(t)&&(a.innerText=t):a.innerHTML=t}}});
},{}],"YIMS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.onNextFrame=o,exports.cancelFrame=t;var e=0,n=window.cancelAnimationFrame||window.mozCancelAnimationFrame,i=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)};function o(n){return e=i(n)}function t(i){n(i||e)}i=i.bind(window),n=n.bind(window);
},{}],"UBm7":[function(require,module,exports) {

},{}],"jICz":[function(require,module,exports) {
"use strict";function e(e){return(e=Math.floor(e))<=0&&(e=0),e>=99&&(e=99),f(e)}function f(e){return["#008000","#0a8000","#128000","#188000","#1e8000","#228000","#268000","#2a8000","#2d8000","#318000","#348000","#377f00","#3a7f00","#3d7f00","#407f00","#427f00","#457f00","#487f00","#4a7f00","#4d7e00","#4f7e00","#527e00","#547e00","#577e00","#597d00","#5c7d00","#5e7d00","#617d00","#637c00","#657c00","#687c00","#6a7b00","#6c7b00","#6f7b00","#717a00","#737a00","#767900","#787900","#7a7900","#7d7800","#7f7800","#817700","#847700","#867600","#887500","#8b7500","#8d7400","#8f7400","#917300","#947200","#967200","#987100","#9b7000","#9d6f00","#9f6f00","#a16e00","#a46d00","#a66c00","#a86b00","#ab6a00","#ad6900","#af6800","#b16700","#b46600","#b66500","#b86400","#ba6300","#bd6200","#bf6000","#c15f00","#c35e00","#c55c00","#c85b00","#ca5a00","#cc5800","#ce5700","#d05500","#d35300","#d55200","#d75000","#d94e00","#db4c00","#dd4a00","#df4800","#e14600","#e44300","#e64100","#e83e00","#ea3c00","#ec3900","#ee3600","#f03300","#f22f00","#f42b00","#f62700","#f82200","#f91d00","#fb1600","#fd0d00","#ff0000"][e]}Object.defineProperty(exports,"__esModule",{value:!0}),exports.greenRed=e;
},{}],"YPDE":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.RadialGauge=exports.settings=void 0;var t=require("@fxi/el"),e=require("../anime_frame/index.js");require("./style.css");var r=require("./colors.js");function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var r=0;r<e.length;r++){var s=e[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function a(t,e,r){return e&&i(t.prototype,e),r&&i(t,r),t}var o={radius:100,fg_stroke:2,fg_stroke_color:"rgba(53,53,53,0.5)",bg_stroke:4,bg_stroke_color:"rgba(53,53,53,0.1)"};exports.settings=o;var n=function(){function i(t,e){s(this,i);this.elTarget=t,this.opt=Object.assign({},o,e),this.init()}return a(i,[{key:"init",value:function(){this.build(),this.updateContext(),this.update(0,0)}},{key:"setMsg",value:function(t,e){this.elMsg.innerText=t,this.elMsg.style.color=e||"#000",this.fitMsg()}},{key:"setMsgError",value:function(t){this.elMsgError.title=t,this.elMsgError.innerText="🐞"}},{key:"destroy",value:function(){this.elTarget&&this.el&&this.el.remove()}},{key:"build",value:function(){var e=this;e.elCanvas=(0,t.el)("canvas",{style:{width:2*e.opt.radius+"px",height:2*e.opt.radius+"px"}}),e.elMsg=(0,t.el)("span",{style:{position:"absolute",whiteSpace:"nowrap","will-change":"transform"}}),e.elMsgError=(0,t.el)("span",{style:{position:"absolute",top:"70%",fontSize:"1em",whiteSpace:"nowrap"}}),e.el=(0,t.el)("div",{class:"radial-gauge"},e.elCanvas,e.elMsg,e.elMsgError),e.elTarget.appendChild(e.el),window.rp=e}},{key:"updateContext",value:function(){var t=this,e=window.devicePixelRatio||1,r=t.elCanvas.getBoundingClientRect();t.rect=r,t.elCanvas.width=r.width*e,t.elCanvas.height=r.height*e;var s=t.elCanvas.getContext("2d");s.scale(e,e),t.ctx=s}},{key:"fitMsg",value:function(){this.elMsg.style.transform="";var t=this.elMsg.getBoundingClientRect(),e=this.elCanvas.getBoundingClientRect().width/t.width;this.elMsg.style.transform="scale(".concat(.55*e,")")}},{key:"update",value:function(t,s,i){var a=this;isFinite(1*s)&&(s=Math.round(s)),void 0===s&&(s="".concat(Math.round(t)," %")),void 0!==i&&a.setMsgError(i),(0,e.onNextFrame)(function(){var e=a.opt.radius;a.updateContext(),a.clear(),a.ctx.lineWidth=a.opt.bg_stroke,a.ctx.strokeStyle=a.opt.bg_stroke_color,a.ctx.beginPath(),a.ctx.arc(e,e,e-a.opt.bg_stroke/2,0,2*Math.PI),a.ctx.stroke(),a.ctx.lineWidth=a.opt.fg_stroke,a._fg_color=t?(0,r.greenRed)(t):a.opt.fg_stroke_color,a.ctx.strokeStyle=a._fg_color,a.ctx.translate(e,e),a.ctx.rotate(-90*Math.PI/180),a.ctx.translate(-e,-e),a.ctx.beginPath(),a.ctx.arc(e,e,e-a.opt.fg_stroke,0,t/100*2*Math.PI),a.ctx.stroke(),a.setMsg(s,a._fg_color)})}},{key:"clear",value:function(){this.ctx.clearRect(0,0,this.elCanvas.width,this.elCanvas.height)}}]),i}();exports.RadialGauge=n;
},{"@fxi/el":"cRin","../anime_frame/index.js":"YIMS","./style.css":"UBm7","./colors.js":"jICz"}],"Focm":[function(require,module,exports) {
"use strict";require("regenerator-runtime/runtime");var e=require("./technis_api/index.js"),t=require("./radial_gauge/index.js");function n(e,t,n,r,a,u,i){try{var o=e[u](i),c=o.value}catch(s){return void n(s)}o.done?t(c):Promise.resolve(c).then(r,a)}function r(e){return function(){var t=this,r=arguments;return new Promise(function(a,u){var i=e.apply(t,r);function o(e){n(i,a,u,o,c,"next",e)}function c(e){n(i,a,u,o,c,"throw",e)}o(void 0)})}}var a=document.getElementById("count"),u=a.getBoundingClientRect(),i=1500,o=new t.RadialGauge(a,{radius:u.width/2,fg_stroke:3.5,bg_stroke:7});function c(e){return s.apply(this,arguments)}function s(){return(s=r(regeneratorRuntime.mark(function t(n){var r,a,u;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=n&&n.target.value?new Date(n.target.value):new Date,t.next=3,(0,e.getDelta)(r);case 3:(a=t.sent)?((u=0!==a.status.code?a.status.msg:void 0)&&console.warn(u),o.update(a.count.delta/i*100,a.count.delta,u)):o.update(0,0);case 5:case"end":return t.stop()}},t)}))).apply(this,arguments)}c().catch(function(e){o.update(0,"Erreur 😬"),console.error(e)}),window.rg=o;
},{"regenerator-runtime/runtime":"QVnC","./technis_api/index.js":"plUd","./radial_gauge/index.js":"YPDE"}]},{},["Focm"], null)
//# sourceMappingURL=src.b8c0799e.js.map