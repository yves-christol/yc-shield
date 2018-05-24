import { randomColor, randomColorBut } from './shield/colors.js';
import { randomFrame } from './shield/frames.js';
import { randomDispo } from './shield/dispos.js';
import { randomMeuble } from './shield/meubles.js';

function randomMeubles() {
  let d = 'start';
  let dList = [];
  let meubles = [];
  while (true) {
    d = randomDispo(dList);
    if (d  === '') {
      break;
    }
    dList.push(d);
    meubles.push({name: randomMeuble(), color: randomColor(), dispo: d});
  }
  return meubles;
}

const RandomShield = () => {
  const shieldColor = randomColor();
  return {
       shieldColor: shieldColor,
       frame: randomFrame(),
       frameColor: randomColorBut(shieldColor),
       meubles: randomMeubles()
  };
};

export default RandomShield;
