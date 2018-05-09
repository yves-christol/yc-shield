import React from 'react';

import Picker from './Picker.js';
import Dispo from './Dispo.js';
import { getDispos } from './shield/dispos.js';

// App component - represents the whole app
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
