import { randomColor, randomColorBut } from './shield/colors.js';
import { randomPartition } from './shield/partitions.js';
import { randomPiece } from './shield/pieces.js';
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
  const partitionColor = randomColorBut([shieldColor]);
  return {
       shieldColor: shieldColor,
       partition: randomPartition(),
       partitionColor: partitionColor,
       piece: randomPiece(),
       pieceColor: randomColorBut([shieldColor, partitionColor]),
       meubles: randomMeubles()
  };
};

export default RandomShield;
