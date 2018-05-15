import React from 'react';

import Picker from './Picker.js';
import Shield from './Shield.js';
import { getColors } from './shield/colors.js';

const Color = (props) => (
  <span
    onClick={() => props.onClick(props.color)}
    className={props.selected ? 'shieldSelected' : 'shield'}
    >
      <Shield
        shieldColor={props.color}
        frame='none'
        frameColor='sable'
        dispo='unique'
        first='none'
        firstColor='sable'
        second='none'
        secondColor='sable'
        third='none'
        thirdColor='none'
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
        selected={col === this.props.selected}
      />
    );
  }

  renderList() {
    return getColors().map(
      (color) => (this.renderOne(color[0]))
    );
  }
}
