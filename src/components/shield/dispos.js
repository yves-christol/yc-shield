const dispos = [
  ['unique', { transfo: ['', '', ''] } ],
  ['small', { transfo: ['scale(0.5)', '', ''] } ],
  ['left', { transfo: ['translate(-12, 0) scale(0.65)', '', ''] } ],
  ['right', { transfo: ['translate(12, 0) scale(0.65)', '', ''] } ],
  ['top', { transfo: ['translate(0, -12) scale(0.65)', '', ''] } ],
  ['down', { transfo: ['translate(0, 16) scale(0.65)', '', ''] } ],
  ['row', { transfo: ['translate(-15, -5) scale(0.55)', 'translate(15, -5) scale(0.55)', ''] } ],
  ['column', { transfo: ['translate(0, -12) scale(0.55)', 'translate(0, 16) scale(0.55)', ''] } ],
  ['columnpear', { transfo: ['translate(0, -16) scale(0.35)', 'translate(0, 12) scale(0.65)', ''] } ],
  ['columntop', { transfo: ['translate(0, -12) scale(0.65)', 'translate(0, 16) scale(0.35)', ''] } ],
  ['left2', { transfo: ['translate(-12, -6) scale(0.65)', 'translate(16, -6) scale(0.35)', ''] } ],
  ['right2', { transfo: ['translate(12, -6) scale(0.65)', 'translate(-16, -6) scale(0.35)', ''] } ],
  ['slash', { transfo: ['translate(-12, -12) scale(0.55)', 'translate(10, 10) scale(0.55)', ''] } ],
  ['antislash', { transfo: ['translate(-10, 10) scale(0.55)', 'translate(12, -12) scale(0.55)', ''] } ],
  ['triangle', { transfo: ['translate(-15, -12) scale(0.55)', 'translate(15, -12) scale(0.55)', 'translate(0, 16) scale(0.55)'] } ],
  ['pointy', { transfo: ['translate(-19, -16) scale(0.4)', 'translate(19, -16) scale(0.4)', 'translate(0, 24) scale(0.4)'] } ],
  ['row3', { transfo: ['translate(-19, -8) scale(0.35)', 'translate(0, -8) scale(0.35)', 'translate(19, -8) scale(0.35)'] } ],
  ['top3', { transfo: ['translate(-19, -16) scale(0.35)', 'translate(0, -16) scale(0.35)', 'translate(19, -16) scale(0.35)'] } ],
  ['column3', { transfo: ['translate(0, -16) scale(0.35)', 'translate(0, 2) scale(0.35)', 'translate(0, 20) scale(0.35)'] } ],
  ['slash3', { transfo: ['translate(-18, -17) scale(0.35)', 'translate(-2, -1) scale(0.35)', 'translate(14, 15) scale(0.35)'] } ],
  ['antislash3', { transfo: ['translate(18, -17) scale(0.35)', 'translate(2, -1) scale(0.35)', 'translate(-14, 15) scale(0.35)'] } ],
  ['toptriangle', { transfo: ['translate(0, -12) scale(0.6)', 'translate(-10, 12) scale(0.35)', 'translate(10, 12) scale(0.35)'] } ],
  ['downtriangle', { transfo: ['translate(-10, -14) scale(0.35)', 'translate(10, -14) scale(0.35)', 'translate(0, 12) scale(0.6)'] } ],
  ['lefttriangle', { transfo: ['translate(-10, -6) scale(0.6)', 'translate(16, -16) scale(0.35)', 'translate(16, 4) scale(0.35)'] } ],
  ['righttriangle', { transfo: ['translate(10, -6) scale(0.6)', 'translate(-16, -16) scale(0.35)', 'translate(-16, 4) scale(0.35)'] } ],
  ['russian', { transfo: ['translate(0, -15) scale(0.55)', 'translate(0, 7) scale(0.45)', 'translate(0, 25) scale(0.35)'] } ],
]

const dispoMap = new Map(dispos);

export function randomDispo() {
  return dispos[Math.floor(Math.random() * dispos.length)][0];
}

export function getDispo(name, i) {
  return dispoMap.get(name).transfo[i];
}

export function getDispos() {
  return dispos;
}
