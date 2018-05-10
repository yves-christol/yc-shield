import React from 'react';

import Picker from './Picker.js';
import Shield from './Shield.js';
import { getColors } from './shield/colors.js';

const Color = (props) => (
  <button
    onClick={() => props.onClick(props.color)}
    className={props.selected ? 'shieldButtonSelected' : 'shieldButton'}
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
  </button>
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
