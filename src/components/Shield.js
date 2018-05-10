import React from 'react';
import { getColor, getColorComp } from './shield/colors.js';
import { getFrame } from './shield/frames.js';
import { getDispo } from './shield/dispos.js';
import { getMeuble } from './shield/meubles.js';

const shield = 'M -30,-30 h60 v26 C 30, 25 0, 36 0, 36 0,36 -30, 25 -30,-4z';

// Shield component - represents a single svg shield
const Shield = (props) => (
      <svg viewBox="-31 -31 62 68">
        <path d={shield} style={{fill: getColor(props.shieldColor), strokeWidth: '0'}} />
        <path d={getFrame(props.frame)}  style={{fill: getColor(props.frameColor)}} />
        <path d={getMeuble(props.first)}
          style={{fill: getColor(props.firstColor), stroke: getColorComp(props.firstColor), strokeWidth: '0.5'}}
          transform={getDispo(props.dispo, 0)}
        />
        { (getDispo(props.dispo, 1) !== '') ?
          <path d={getMeuble(props.second)}
            style={{fill: getColor(props.secondColor), stroke: getColorComp(props.secondColor), strokeWidth: '0.5'}}
            transform={getDispo(props.dispo, 1)}
          /> : <path d='' />
        }
        { (getDispo(props.dispo, 2) !== '') ?
          <path d={getMeuble(props.third)}
            style={{fill: getColor(props.thirdColor), stroke: getColorComp(props.thirdColor), strokeWidth: '0.5'}}
            transform={getDispo(props.dispo, 2)}
          /> : <path d='' />
        }
        < path d={shield}
          style={{fill: 'transparent', stroke: '#000000', strokeWidth: '0.5'}}
        />
      </svg>
);

export default Shield;
