import React from 'react';

import Picker from './Picker.js';
import Color from './Color.js';
import { getColors } from './shield/colors.js';

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
