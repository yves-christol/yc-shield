import React, { Component } from 'react';
import fire from './fire';

import FramePicker from './FramePicker.js';
import ColorPicker from './ColorPicker.js';
import MeublePicker from './MeublePicker.js';
import DispoPicker from './DispoPicker.js';
import Collection from './Collection.js';
import Shield from './Shield.js';

// App component - represents the whole app
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = Shield.getRandomShield();
    this.pick = this.pick.bind(this);
    this.storeShield = this.storeShield.bind(this);
  }

  pick(attribute, value) {
    this.setState({[attribute]: value});
  }

  storeShield(event) {
    event.preventDefault(); // <- prevent form submit from reloading the page
    fire.database().ref('/shields').push( this.state);
  }

  render() {
    return (
      <div className='wrapper'>
        <div className='box header'>
          <h1>Blason Your Character</h1>
        </div>
        <div className='box shield'>
            <Shield
              shieldColor={this.state.shieldColor}
              frame={this.state.frame}
              frameColor={this.state.frameColor}
              dispo={this.state.dispo}
              first={this.state.first}
              firstColor={this.state.firstColor}
              second={this.state.second}
              secondColor={this.state.secondColor}
              third={this.state.third}
              thirdColor={this.state.thirdColor}
            />
        </div>

        <div className='box line'>
          Shield Color
          <ColorPicker
            selected={this.state.shieldColor}
            action={this.pick}
            attribute='shieldColor'
          />
          Frame
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
          Dispo
          <DispoPicker
            selected={this.state.dispo}
            action={this.pick}
            attribute='dispo'
          />
          Add this shield to collection
          <button
            onClick={this.storeShield}
            className='save'
          >
            Add
          </button>
        </div>
        <div className='box line2'>
          First Meuble
          <MeublePicker
            selected={this.state.first}
            action={this.pick}
            attribute='first'
          />
          <ColorPicker
            selected={this.state.firstColor}
            action={this.pick}
            attribute='firstColor'
          />
          Second Meuble
          <MeublePicker
            selected={this.state.second}
            action={this.pick}
            attribute='second'
          />
          <ColorPicker
            selected={this.state.secondColor}
            action={this.pick}
            attribute='secondColor'
          />
          Third Meuble
          <MeublePicker
            selected={this.state.third}
            action={this.pick}
            attribute='third'
          />
          <ColorPicker
            selected={this.state.thirdColor}
            action={this.pick}
            attribute='thirdColor'
          />
        </div>
        <div className='collection'>
          <Collection />
        </div>
      </div>
    );
  }
}
