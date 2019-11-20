import React, { Component } from 'react';

export class TimeSelector extends Component {
  render() {
    let numPickers = 1;
    let pickerType = 'date';
    if (this.props.period === 'custom') {
      numPickers = 2;
    } else if (this.props.period === 'all') {
      numPickers = 0;
    }
    return (
      <>
        {numPickers !== 0 && pickerType === 'date' && (
          <input type="date" name="begin" id="begin" />
        )}
        {numPickers === 2 && pickerType === 'date' && (
          <input type="date" name="end" id="end" />
        )}
      </>
    );
  }
}

export default TimeSelector;
