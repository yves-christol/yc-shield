import React, { Component } from 'react';


export default class Overlay extends Component {

  componentDidMount() {
    const body = document.body;
    const overlay = document.querySelector('.overlay');
    if (overlay) {
      overlay.setAttribute('aria-hidden', false);
      overlay.scrollTop = 0;
    }
    if (body) {
      body.classList.toggle('noscroll', true);
    }
  }

  componentWillUnmount() {
    const body = document.body;
    const overlay = document.querySelector('.overlay');
    if (overlay) {
      overlay.setAttribute('aria-hidden', true);
    }
    if (body) {
      body.classList.toggle('noscroll', false);
    }
  }

  render() {
    return (
      <span> </span>
    );
  }
}
