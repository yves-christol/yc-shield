import React from 'react';
import { getColor, getColorComp } from './shield/colors.js';
import { getFrame } from './shield/frames.js';
import { getTransfo } from './shield/dispos.js';
import { getMeuble } from './shield/meubles.js';

const shield = 'M -30,-30 h60 v26 C 30, 25 0, 36 0, 36 0,36 -30, 25 -30,-4z';

// Shield component - represents a single svg shield
// props should contain :
// shieldColor: String
// frame: String
// frameColor: String
// meubles: [{name: String, dispo: String, color: String}, ...]

const Shield = (props) => (
  <svg viewBox="-31 -31 62 68">
    <defs>
      <radialGradient id="grad" gradientUnits="userSpaceOnUse" cx="-8" cy="-8" r="40">
        <stop stopColor='#fff' stopOpacity='0.31' offset='0%'/>
        <stop stopColor='#fff' stopOpacity='0.25' offset='19%'/>
        <stop stopColor='#6b6b6b' stopOpacity='0.12' offset='60%'/>
        <stop stopColor='#000' stopOpacity='0.12' offset='100%'/>
      </radialGradient>
    </defs>
    <path d={shield} style={{fill: getColor(props.shieldColor), strokeWidth: '0'}} />
    <path d={getFrame(props.frame)}  style={{fill: getColor(props.frameColor)}} />
    {props.meubles ? props.meubles.map((m) =>
      <path key={m.dispo} d={getMeuble(m.name)}
        style={{fill: getColor(m.color), stroke: getColorComp(m.color), strokeWidth: '0.5'}}
        transform={getTransfo(m.dispo, 0)}
      />) :
      ''
    }
    < path d={shield}
      style={{fill: 'url(#grad)', stroke: '#000', strokeWidth: '0.5'}}
    />
  </svg>
);

export default Shield;
