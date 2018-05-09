import React from 'react';

import Picker from './Picker.js';
import Meuble from './Meuble.js';
import { getMeubles } from './shield/meubles.js';

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
