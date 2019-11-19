import React, { Component } from 'react';

export class TimeSelector extends Component {
  render() {
    return (
      <>
        {' '}
        <input type="date" name="begin" id="begin" />
        <input type="date" name="end" id="end" />
      </>
    );
  }
}

export default TimeSelector;
