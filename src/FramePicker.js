import React from 'react';

import Picker from './Picker.js';
import Frame from './Frame.js';
import { getFrames } from './shield/frames.js';

// App component - represents the whole app
export default class FramePicker extends Picker {

  renderOne(fra) {
    return (
      <Frame
        key={fra}
        frame={fra}
        onClick={this.pick}
        selected={fra === this.props.selected}
      />
    );
  }

  renderList() {
    return getFrames().map(
      (frame, idx) => (this.renderOne(frame[0]))
    );
  }
}
