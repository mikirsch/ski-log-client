import React, { Component } from 'react';
import { formatDate } from '../../Utilities/UtilityFunctions';

export class TimeSelector extends Component {
  constructor(props) {
    super(props);
    this.state = { year: new Date().getFullYear() };
  }
  render() {
    let numDatePickers = 0;
    let pickerType = this.props.period;
    let year = this.props.beginDate.split('-')[0];
    if (this.props.period === 'custom') {
      numDatePickers = 2;
      pickerType = 'date';
    } else if (this.props.period === 'date' || this.props.period === 'month') {
      numDatePickers = 1;
    }
    return (
      <>
        {numDatePickers > 0 && (
          <input
            type="date"
            name="begin"
            id="beginDate"
            value={this.props.beginDate}
            onChange={this.props.changeHandler}
          />
        )}
        {numDatePickers === 2 && (
          <input
            type="date"
            name="end"
            id="endDate"
            value={this.props.endDate}
            onChange={this.props.changeHandler}
          />
        )}
        {pickerType === 'month' && (
          <label htmlFor="beginDate">
            (choose any day within the month of interest)
          </label>
        )}
        {pickerType === 'month' &&
        false && ( //TODO: fix this
            <>
              <select id="beginDate" onChange={this.props.changeHandler}>
                <option value={`${year}-01-01`}>January</option>
                <option value={`${this.state.year}-02-01`}>February</option>
                <option value={`${this.state.year}-03-01`}>March</option>
                <option value={`${this.state.year}-04-01`}>April</option>
                <option value={`${this.state.year}-05-01`}>May</option>
                <option value={`${this.state.year}-06-01`}>June</option>
                <option value={`${this.state.year}-07-01`}>July</option>
                <option value={`${this.state.year}-08-01`}>August</option>
                <option value={`${this.state.year}-09-01`}>September</option>
                <option value={`${this.state.year}-10-01`}>October</option>
                <option value={`${this.state.year}-11-01`}>November</option>
                <option value={`${this.state.year}-12-01`}>December</option>
              </select>
              <input
                type="number"
                min="1900"
                max={new Date().getFullYear()}
                step="1"
                id="year"
                value={this.state.year}
                onChange={event => {
                  this.setState(
                    { year: event.target.value },
                    this.props.updateOther('beginDate')
                  );
                }}
              />
            </>
          )}
        {pickerType === 'season' && (
          <>
            <label htmlFor="season">Season of</label>
            <input
              name="season"
              type="number"
              min="1900"
              id="beginDate"
              max={new Date().getFullYear()}
              value={this.state.year}
              onChange={event => {
                this.setState({ year: event.target.value });
                this.props.changeHandler(event);
              }}
            />
            <label htmlFor="season">
              &ndash;{parseInt(this.state.year) + 1}
            </label>
          </>
        )}
      </>
    );
  }
}

export default TimeSelector;
