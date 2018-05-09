const dispos = [
  ['unique', { transfo: ['', '', ''] } ],
  ['row', { transfo: ['translate(-15, -5) scale(0.55)', 'translate(15, -5) scale(0.55)', ''] } ],
  ['column', { transfo: ['translate(0, -12) scale(0.55)', 'translate(0, 16) scale(0.55)', ''] } ],
  ['columnpear', { transfo: ['translate(0, -16) scale(0.35)', 'translate(0, 12) scale(0.65)', ''] } ],
  ['columntop', { transfo: ['translate(0, -12) scale(0.65)', 'translate(0, 16) scale(0.35)', ''] } ],
  ['slash', { transfo: ['translate(-12, -12) scale(0.55)', 'translate(10, 10) scale(0.55)', ''] } ],
  ['antislash', { transfo: ['translate(-10, 10) scale(0.55)', 'translate(12, -12) scale(0.55)', ''] } ],
  ['triangle', { transfo: ['translate(-15, -12) scale(0.55)', 'translate(15, -12) scale(0.55)', 'translate(0, 16) scale(0.55)'] } ],
  ['row3', { transfo: ['translate(-19, -8) scale(0.35)', 'translate(0, -8) scale(0.35)', 'translate(19, -8) scale(0.35)'] } ],
  ['column3', { transfo: ['translate(0, -16) scale(0.35)', 'translate(0, 2) scale(0.35)', 'translate(0, 20) scale(0.35)'] } ],
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
