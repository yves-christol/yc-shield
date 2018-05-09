import React, { Component } from 'react';
import Shield from './Shield.js';

// Shield component - represents a single svg shield
export default class Meuble extends Component {
  render() {
    return (
      <button
        onClick={() => this.props.onClick(this.props.meuble)}
        className={this.props.selected ? 'shieldButtonSelected' : 'shieldButton'}
      >
        <Shield
          shieldColor='argent'
          frame='none'
          frameColor='sable'
          dispo='unique'
          first={this.props.meuble}
          firstColor='sable'
          second='none'
          secondColor='sable'
          third='none'
          thirdColor='sable'
        />
      </button>
    );
  }
}
