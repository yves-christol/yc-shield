import React from 'react';

import Picker from './Picker.js';
import Shield from './Shield.js';
import { getDispos } from './shield/dispos.js';

const Dispo = (props) => (
  <button
    onClick={() => props.onClick(props.dispo)}
    className={props.selected ? 'shieldButtonSelected' : 'shieldButton'}
    >
      <Shield
        shieldColor='argent'
        frame='none'
        frameColor='sable'
        dispo={props.dispo}
        first='rond'
        firstColor='sable'
        second='rond'
        secondColor='sable'
        third='rond'
        thirdColor='sable'
      />
  </button>
);

export default class DispoPicker extends Picker {
  
  renderOne(dis) {
    return (
      <Dispo
        key={dis}
        dispo={dis}
        onClick={this.pick}
        selected={dis === this.props.selected}
      />
    );
  }

  renderList() {
    return getDispos().map(
      (dispo) => (this.renderOne(dispo[0]))
    );
  }
}
