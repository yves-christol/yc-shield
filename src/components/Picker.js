import React, { Component } from 'react';

import Overlay from './Overlay.js';

// Generic Picker
export default class Picker extends Component {
  constructor(props) {
    super(props);
    this.state = {expanded: false};
    this.pick = this.pick.bind(this);
  }

  pick(item) {
    if (this.state.expanded) {
      this.props.action(this.props.attribute, item);
    }
    this.setState( {expanded: (!this.state.expanded)});
  }

  renderList() {
    return (
      <div>
        generic picker, should not see this
      </div>
    );
  }

  renderOne() {
    return (
      <div>
        generic picker, should not see this
      </div>
    );
  }

  render() {
    return (
      <span>
        {this.state.expanded ?
          <section className="overlay" aria-hidden="true">
            <Overlay />
            {this.renderList()}
          </section> :
          this.renderOne(this.props.selected)}
      </span>
    );
  }
}
