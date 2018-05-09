import React, { Component } from 'react';
import { randomColor, randomColorBut, getColor, getColorComp } from './shield/colors.js';
import { randomFrame, getFrame } from './shield/frames.js';
import { randomDispo, getDispo } from './shield/dispos.js';
import { randomMeuble, getMeuble } from './shield/meubles.js';

const shield = 'M -30,-30 h60 v26 C 30, 25 0, 36 0, 36 0,36 -30, 25 -30,-4z';

// Shield component - represents a single svg shield
export default class Shield extends Component {

  static getRandomShield() {
    const shieldColor = randomColor();
    const frame = randomFrame();
    const frameColor = randomColorBut(shieldColor);
    const dispo = randomDispo();
    const firstColor = randomColor();
    const secondColor = randomColor();
    const thirdColor = randomColor();
    const first = randomMeuble();
    const second = randomMeuble();
    const third = randomMeuble();
    return {
         shieldColor: shieldColor,
         frame: frame,
         frameColor: frameColor,
         dispo: dispo,
         first: first,
         firstColor: firstColor,
         second: second,
         secondColor: secondColor,
         third: third,
         thirdColor: thirdColor
    };
  }

  render() {
    return (
      <svg viewBox="-31 -31 62 68">
        <path d={shield} style={{fill: getColor(this.props.shieldColor), strokeWidth: '0'}} />
        <path d={getFrame(this.props.frame)}  style={{fill: getColor(this.props.frameColor)}} />
        <path d={getMeuble(this.props.first)}
          style={{fill: getColor(this.props.firstColor), stroke: getColorComp(this.props.firstColor), strokeWidth: '0.5'}}
          transform={getDispo(this.props.dispo, 0)}
        />
        { (getDispo(this.props.dispo, 1) !== '') ?
          <path d={getMeuble(this.props.second)}
            style={{fill: getColor(this.props.secondColor), stroke: getColorComp(this.props.secondColor), strokeWidth: '0.5'}}
            transform={getDispo(this.props.dispo, 1)}
          /> : <path d='' />
        }
        { (getDispo(this.props.dispo, 2) !== '') ?
          <path d={getMeuble(this.props.third)}
            style={{fill: getColor(this.props.thirdColor), stroke: getColorComp(this.props.thirdColor), strokeWidth: '0.5'}}
            transform={getDispo(this.props.dispo, 2)}
          /> : <path d='' />
        }
        < path d={shield}
          style={{fill: 'transparent', stroke: '#000000', strokeWidth: '0.5'}}
        />
      </svg>
    );
  }
}
