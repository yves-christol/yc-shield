import React, { Component } from 'react';
import Shield from './Shield.js';

export default class Dispo extends Component {
  render() {
    return (
      <button
        onClick={() => this.props.onClick(this.props.dispo)}
        className={this.props.selected ? 'shieldButtonSelected' : 'shieldButton'}
      >
        <Shield
          shieldColor='argent'
          frame='none'
          frameColor='sable'
          dispo={this.props.dispo}
          first='rond'
          firstColor='sable'
          second='rond'
          secondColor='sable'
          third='rond'
          thirdColor='sable'
        />
      </button>
    );
  }
}
