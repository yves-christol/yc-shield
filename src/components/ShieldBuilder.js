import React, { Component } from 'react';

import PartitionPicker from './PartitionPicker.js';
import PiecePicker from './PiecePicker.js';
import ColorPicker from './ColorPicker.js';
import MeubleBuilder from './MeubleBuilder.js';
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
    this.setState({[attribute]: value});
  }

  onSave(event) {
    event.preventDefault(); // <- prevent form submit from reloading the page
    this.props.save(this.state);
  }

  render() {
    return (
      <div className='row'>
        <div className='five columns'>
            <Shield
              shieldColor={this.state.shieldColor}
              partition={this.state.partition}
              partitionColor={this.state.partitionColor}
              piece={this.state.piece}
              pieceColor={this.state.pieceColor}
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
            <p>Partition</p>
            <PartitionPicker
              selected={this.state.partition}
              action={this.pick}
              attribute='partition'
            />
            <ColorPicker
              selected={this.state.partitionColor}
              action={this.pick}
              attribute='partitionColor'
            />
          </div>
          <div>
            <p>Piece</p>
            <PiecePicker
              selected={this.state.piece}
              action={this.pick}
              attribute='piece'
            />
            <ColorPicker
              selected={this.state.pieceColor}
              action={this.pick}
              attribute='pieceColor'
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
