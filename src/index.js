import 'regenerator-runtime/runtime';

import {getDelta} from './technis_api/index.js';
import {RadialGauge} from './radial_gauge/index.js';

const elCount = document.getElementById('count');
const rect = elCount.getBoundingClientRect();
const maxPeople = 1500;
const rg = new RadialGauge(elCount,{radius:rect.width/2});

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
    rg.update((res.delta / maxPeople) * 100, res.delta);
  }
}
window.rg=rg;
