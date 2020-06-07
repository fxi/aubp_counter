const config = {
  endPoint: 'https://api.mytechnis.com/api',
  idZone: 355,
  idEvent: 296,
  idInstall: 212,
  token:
    'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJPQ3gxdlJzdFNmZVc4S003SUtHcFNzV2V4QU8yIiwiaWF0IjoxNTkxNDM5MTM5LCJjbGFpbXMiOnsiaXNBcGlLZXkiOnRydWV9fQ.om6lgfG7lVNzSIfTtkgsORyillVnfiRtGpqdpu1DNvj-KUbXRBHwiNUal7HRNtvq3A71631TZU8sxmtTfYfpLKGeRwV5vgweSxJkmSJhBFQsjaOG9D9bUPzLqQmfzu7paP2NotxYf2WSoU02gkTLnd0c33CvavB-muCmp8Ei4VVfWsIwhDoArRTavtaJVF1zS30lD6DRF_WKe4W7UfZn_wlKpT6fpTZlbh3A_Gbve3z_AjnazG_aRO2qN8r5TGYd5qLx1re43Q_vvWjf6r6aw5Ps-OpdRL7vVhIDpyQ9ZQn0uL3ubAp8IB3IFbRM8lqeYSF37K5_fgA8QfKa-V4o7Q'
};
const elCount = document.getElementById('count');

update().catch((e) => {
  elCount.innerText = 'Erreur 😬';
  console.err(e);
});
/**
 * Helpers
 */
async function update(e) {
  const date = e && e.target.value ? new Date(e.target.value) : new Date();
  const res = await getDelta(date);
  if (!res) {
    elCount.innerText = 0;
  } else {
    elCount.innerText = res.delta;
  }
}
async function getDelta(date) {
  const t = new Date(date);
  const t1 = t.setHours(7, 0, 0, 0);
  const t2 = t.setHours(21, 0, 0, 0);
  const strQ = `{
zoneById(zoneId: ${config.idZone}){
    id
    name
    installation { address }
    counts(
    eventId: ${config.idEvent}, 
    dates:  [${t1}, ${t2}]) { 
    dateBegin 
    dateEnd 
    eventId 
    periodId 
    in 
    out
    }
  }
}`;
  const res = await query(strQ);
  const count = res.zoneById.counts[0];
  if (count) {
    count.delta = count.in - count.out;
  }
  return count;
}
async function query(str) {
  const res = await fetch(config.endPoint, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${config.token}`
    },
    body: JSON.stringify({
      query: str
    })
  });
  const value = await res.json();
  if (!value.data && value.errors) {
    throw new Error(JSON.stringify(value.errors));
  }
  return value.data;
}
