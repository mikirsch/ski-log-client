import React, { Component } from 'react';
import AddBasics from '../AddBasics/AddBasics';
import DataApiService from '../../services/data-api-service';
import { onChangeUtil } from '../../Utilities/UtilityFunctions';
import Vert from '../Vert/Vert';

export class AddActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      area: '',
      newArea: '',
      duration: null,
      durationError: false,
      date: new Date(),
      futureDateSelected: false,
      error: null,
      submitted: false,
      vert: false,
      totalVert: 0
    };
  }

  onChange = event => {
    const newState = onChangeUtil(event, this.state);
    newState.submitted = false;
    this.setState(newState);
  };
  onToggle = event => {
    const newState = {};
    newState[event.target.id] = !this.state[event.target.id];
    this.setState(newState);
  };
  handleGenericChange = (key, value) => {
    let newState = { submitted: false };
    newState[key] = value;
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
      //must be less than a full day, and the minutes should be minutes
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

    const log = {
      date: date.toISOString(),
      duration,
      ski_area: newArea,
      location: 'NYI'
    };
    if (this.state.vert) {
      log.vert = this.state.totalVert;
    }
    DataApiService.postLog(log);
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
              handleGenericChange={this.handleGenericChange}
              handleDateChange={this.handleDateChange}
              handleDurationChange={this.handleDurationChange}
              handleToggle={this.onToggle}
              newArea={this.state.newArea}
              readState={{ ...this.state }}
            />
            {this.state.vert && (
              <Vert
                onChange={this.onChange}
                genericChange={this.handleGenericChange}
                totalVert={this.state.totalVert}
              />
            )}
          </form>
          <button
            type="submit"
            htmlFor="add-ski"
            onClick={this.handleSubmit}
            disabled={
              this.state.submitted ||
              this.state.error ||
              this.state.durationError ||
              !this.state.newArea
            }
          >
            Submit
          </button>
          {this.state.submitted && <p>Visit added!</p>}
        </section>
      </>
    );
  }
}

export default AddActivity;
