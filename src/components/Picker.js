import React, { Component } from 'react';

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
      <div>
        {this.state.expanded ?
          this.renderList() :
          this.renderOne(this.props.selected)}
      </div>
    );
  }
}
