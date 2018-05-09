import React, { Component } from 'react';
import Shield from './Shield.js';

export default class Frame extends Component {
  render() {
    return (
      <button
        onClick={() => this.props.onClick(this.props.frame)}
        className={this.props.selected ? 'shieldButtonSelected' : 'shieldButton'}
      >
        <Shield
          shieldColor='argent'
          frame={this.props.frame}
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
  }
}
