import React from 'react';

import Picker from './Picker.js';
import Shield from './Shield.js';
import {getLeftDispos} from './shield/dispos.js';


const m = (d) => ([{name: 'rond', color: 'sable', dispo: d}]);

const Dispo = (props) => (
  <span
    onClick={() => props.onClick(props.dispo)}
    className={props.selected ? 'shieldSelected' : 'shield'}
    >
      <Shield
        shieldColor='argent'
        partition='none'
        partitionColor='sable'
        piece='none'
        pieceColor='sable'
        meubles={m(props.dispo)}
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
        selected={this.state.expanded && dis === this.props.selected}
      />
    );
  }

  renderList() {
    const rem = this.props.dispos.filter((d) => d !== this.props.selected);
    const left = getLeftDispos(rem);
    return left.map(
      (d) => (this.renderOne(d))
    );
  }
}
