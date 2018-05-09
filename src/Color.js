import React, { Component } from 'react';
import Shield from './Shield.js';

// Shield component - represents a single svg shield
export default class Color extends Component {
  render() {
    return (
      <button
        onClick={() => this.props.onClick(this.props.color)}
        className={this.props.selected ? 'shieldButtonSelected' : 'shieldButton'}
      >
        <Shield
          shieldColor={this.props.color}
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
  }
}
