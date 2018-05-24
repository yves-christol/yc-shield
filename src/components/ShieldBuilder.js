import React, { Component } from 'react';

import FramePicker from './FramePicker.js';
import ColorPicker from './ColorPicker.js';
import MeubleBuilder from './MeubleBuilder.js';
import DispoPicker from './DispoPicker.js';
import Shield from './Shield.js';
import RandomShield from './RandomShield.js';

export default class ShieldBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = RandomShield();
    this.pick = this.pick.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  pick(attribute, value) {
    console.log('tyty');
    this.setState({[attribute]: value});
  }

  onSave(event) {
    event.preventDefault(); // <- prevent form submit from reloading the page
    this.props.save(this.state);
  }

  render() {
    console.log('shieldcolor '+this.state.shieldColor);
    console.log('meubles '+this.state.meubles.length);

    return (
      <div className='row'>
        <div className='five columns'>
            <Shield
              shieldColor={this.state.shieldColor}
              frame={this.state.frame}
              frameColor={this.state.frameColor}
              dispo={this.state.dispo}
              meubles={this.state.meubles}
            />
            <button
              onClick={this.onSave}
              className='button-primary'
            >
              Save
            </button>
            <p>(add this shield to collection)</p>
        </div>

        <div className='two columns'>
          <div>
            <p>Shield Color</p>
            <ColorPicker
              selected={this.state.shieldColor}
              action={this.pick}
              attribute='shieldColor'
            />
          </div>
          <div>
            <p>Frame</p>
            <FramePicker
              selected={this.state.frame}
              action={this.pick}
              attribute='frame'
            />
            <ColorPicker
              selected={this.state.frameColor}
              action={this.pick}
              attribute='frameColor'
            />
          </div>
        </div>
        <MeubleBuilder
          meubles={this.state.meubles}
          action={this.pick}
          attribute='meubles'
        />
      </div>
    );
  }
}
