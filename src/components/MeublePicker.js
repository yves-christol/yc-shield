import React from 'react';

import Picker from './Picker.js';
import Shield from './Shield.js';
import { getMeubles } from './shield/meubles.js';

const m = (m) => ([{name: m, color: 'sable', dispo: 'r1'}]);

const Meuble = (props) => (
  <span
    onClick={() => props.onClick(props.meuble)}
    className={props.selected ? 'shieldSelected' : 'shield'}
    >
      <Shield
        shieldColor='argent'
        frame='none'
        frameColor='sable'
        dispo='r1'
        meubles={m(props.meuble)}
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
        selected={this.state.expanded && meu === this.props.selected}
      />
    );
  }

  renderList() {
    return getMeubles().map(
      (meuble) => (this.renderOne(meuble[0]))
    );
  }
}
