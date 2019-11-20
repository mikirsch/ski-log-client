import React, { Component } from 'react';
import AddBasics from '../AddBasics/AddBasics';
import DataApiService from '../../services/data-api-service';

export class AddActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      area: '',
      newArea: '',
      duration: null,
      date: new Date(),
      futureDateSelected: false,
      durationError: false,
      error: null,
      submitted: false
    };
  }
  formatDate = date => {
    return `${date.getFullYear()}-${
      date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
    }-${date.getDate()}`;
  };
  handleGenericStringChange = (key, event) => {
    let newState = { ...this.state, submitted: false };
    newState[key] = event.target.value;
    this.setState(newState);
  };
  handleDateChange = event => {
    const date = new Date(event.target.value);
    let futureDateSelected = false;
    if (date > Date.now()) {
      //skiing in the future?
      futureDateSelected = true;
    }
    this.setState({ date, futureDateSelected, submitted: false });
  };
  handleDurationChange = event => {
    const time = event.target.value.split(':').map(a => Number(a));
    let durationError = false;
    if (time[0] > 23 || time[1] > 59) {
      //must be less than a full day
      durationError = true;
    } else if (time[0] < 0 || time[1] < 0) {
      // negative components are bad
      durationError = true;
    } else if (time[0] + time[1] < 1) {
      // duration must be positive
      //not technically exclusive with earlier tests, but not needed if flag already set
      durationError = true;
    }
    const duration = `${time[0]}:${time[1] < 10 ? '0' + time[1] : time[1]}`;
    this.setState({ duration, durationError, submitted: false });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.setState({ error: null });
    if (this.state.futureDateSelected || this.state.durationError) {
      return;
    }
    const { date, duration, newArea } = this.state;

    DataApiService.postLog({
      date: date.toISOString(),
      duration,
      ski_area: newArea,
      location: 'NYI'
    });
    this.setState({ submitted: true });
  };
  render() {
    return (
      <>
        <header role="banner">
          <h1>Add Data</h1>
        </header>
        <section className="add-day">
          <h2>Add a Ski Day</h2>
          <form id="add-ski">
            <AddBasics
              handleGenericStringChange={this.handleGenericStringChange}
              handleDateChange={this.handleDateChange}
              handleDurationChange={this.handleDurationChange}
              formatDate={this.formatDate}
              readState={this.state}
            />
          </form>
          <button type="submit" htmlFor="add-ski" onClick={this.handleSubmit}>
            Submit
          </button>
          {this.state.submitted && <p>Visit added!</p>}
        </section>
      </>
    );
  }
}

export default AddActivity;
