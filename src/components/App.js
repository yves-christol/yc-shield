import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import fire from '../fire';

import Collection from './Collection.js';
import ShieldBuilder from './ShieldBuilder.js';

// App component - represents the whole app
export default class App extends Component {
  constructor(props) {
    super(props);
    this.saveShield = this.saveShield.bind(this);
  }

  saveShield(shield) {
    fire.database().ref('/shields').push( shield);
  }

  render() {
    return (
      <Router >
        <div className="app">
          <ShieldBuilder save={this.saveShield} />
          <Collection className="collection" />
        </div>
      </Router>
    );
  }
}
