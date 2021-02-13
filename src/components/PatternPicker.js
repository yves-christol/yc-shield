import React from 'react';

import Picker from './Picker.js';
import Shield from './Shield.js';
import { getColors } from './shield/colors.js';

const Pattern = (props) => (
  <span
    onClick={() => props.onClick(props.color)}
    className={props.selected ? 'shieldSelected' : 'shield'}
    >
      <Shield
        shieldColor={props.color}
        partition='none'
        partitionColor='sable'
        piece='none'
        pieceColor='sable'
      />
  </span>
);

export default class ColorPicker extends Picker {

  renderOne(col) {
    return (
      <Color
        key={col}
        color={col}
        onClick={this.pick}
        selected={this.state.expanded && col === this.props.selected}
      />
    );
  }

  renderList() {
    return getColors().map(
      (color) => (this.renderOne(color[0]))
    );
  }
}
