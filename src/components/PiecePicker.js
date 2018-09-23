import React from 'react';

import Picker from './Picker.js';
import Shield from './Shield.js';
import { getPieces } from './shield/pieces.js';

const Piece =(props) => (
  <span
    onClick={() => props.onClick(props.piece)}
    className={props.selected ? 'shieldSelected' : 'shield'}
    >
      <Shield
        shieldColor='argent'
        piece={props.piece}
      />
  </span>
);

export default class PiecePicker extends Picker {

  renderOne(pie) {
    return (
      <Piece
        key={pie}
        piece={pie}
        onClick={this.pick}
        selected={this.state.expanded && pie === this.props.selected}
      />
    );
  }

  renderList() {
    return (
      <span>
        {getPieces().map((piece, idx) => (this.renderOne(piece[0])))}
      </span>
    );
  }
}
