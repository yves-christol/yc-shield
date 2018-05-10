import { randomColor, randomColorBut } from './shield/colors.js';
import { randomFrame } from './shield/frames.js';
import { randomDispo } from './shield/dispos.js';
import { randomMeuble } from './shield/meubles.js';

const RandomShield = () => {
  const shieldColor = randomColor();
  return {
       shieldColor: shieldColor,
       frame: randomFrame(),
       frameColor: randomColorBut(shieldColor),
       dispo: randomDispo(),
       first: randomMeuble(),
       firstColor: randomColor(),
       second: randomMeuble(),
       secondColor: randomColor(),
       third: randomMeuble(),
       thirdColor: randomColor()
  };
};

export default RandomShield;
