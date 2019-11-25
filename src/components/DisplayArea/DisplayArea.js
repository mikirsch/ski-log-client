import React, { Component } from 'react';

export class DisplayArea extends Component {
  render() {
    return (
      <li>
        Days skied at {this.props.area}: {this.props.days}
      </li>
    );
  }
}

export default DisplayArea;
