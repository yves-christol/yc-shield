import React from 'react';

import Picker from './Picker.js';
import Shield from './Shield.js';
import { getFrames } from './shield/frames.js';

const Frame =(props) => (
  <button
    onClick={() => props.onClick(props.frame)}
    className={props.selected ? 'shieldButtonSelected' : 'shieldButton'}
    >
      <Shield
        shieldColor='argent'
        frame={props.frame}
        frameColor='sable'
        dispo='unique'
        first='none'
        firstColor='sable'
        second='none'
        secondColor='sable'
        third='none'
        thirdColor='sable'
      />
  </button>
);

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