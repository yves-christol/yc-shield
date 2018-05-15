import React from 'react';

import Picker from './Picker.js';
import Shield from './Shield.js';
import { getDispos } from './shield/dispos.js';

const Dispo = (props) => (
  <span
    onClick={() => props.onClick(props.dispo)}
    className={props.selected ? 'shieldSelected' : 'shield'}
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
  </span>
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
