import React from 'react';

import Picker from './Picker.js';
import Shield from './Shield.js';
import { getMeubles } from './shield/meubles.js';

const Meuble = (props) => (
  <span
    onClick={() => props.onClick(props.meuble)}
    className={props.selected ? 'shieldSelected' : 'shield'}
    >
      <Shield
        shieldColor='argent'
        frame='none'
        frameColor='sable'
        dispo='unique'
        first={props.meuble}
        firstColor='sable'
        second='none'
        secondColor='sable'
        third='none'
        thirdColor='sable'
      />
  </span>
);

export default class MeublePicker extends Picker {

  renderOne(meu) {
    return (
      <Meuble
        key={meu}
        meuble={meu}
        onClick={this.pick}
        selected={meu === this.props.selected}
      />
    );
  }

  renderList() {
    return getMeubles().map(
      (meuble) => (this.renderOne(meuble[0]))
    );
  }
}
