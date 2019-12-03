import React, { Component } from 'react';
import { formatDate } from '../../Utilities/UtilityFunctions';
import './AddBasics.css';

export class AddBasics extends Component {
  render() {
    const readState = this.props.readState;
    return (
      <fieldset name="add-basics">
        <legend>The Basics</legend>
        <label htmlFor="day">
          When was this ski day?{' '}
          {readState.futureDateSelected && (
            <span className="date-error error">
              The selected date is in the future
            </span>
          )}
        </label>
        <input
          type="date"
          name="day"
          id="day"
          value={formatDate(readState.date)}
          onChange={this.props.handleDateChange}
        />
        {/*<label htmlFor="area">Location: </label>
         <select name="area" required>
          <option value="">Choose or add a location</option>
          <option value="keystone">Keystone</option>
          <option value="vail">Vail</option>
          <option value="add">Add a new location!</option>
        </select> */}
        <label htmlFor="new-area">Location: </label>
        <input
          name="new-area"
          id="new-area"
          type="text"
          value={readState.newArea}
          onChange={event =>
            this.props.handleGenericChange('newArea', event.target.value)
          }
        />
        {/* <label htmlFor="type" required>
          What type of skiing did you do?
        </label>
        <select name="type" id="ski-type">
          <option value="downhill">downhill</option>
          <option value="x-c">cross country</option>
        </select> */}
        <label htmlFor="duration">
          How long did you ski? (optional) (hours:minutes){' '}
          {readState.durationError && (
            <span className="duration-error error">Duration out of bounds</span>
          )}
        </label>
        <input
          type="text"
          placeholder="1:23"
          name="duration"
          id="ski-duration"
          // value={readState.duration}
          onChange={this.props.handleDurationChange}
        />
        <div>
          <div>
            <input
              type="checkbox"
              id="notetoggle"
              checked={readState.notetoggle}
              onChange={this.props.handleToggle}
            />{' '}
            <label htmlFor="notetoggle">
              I would like to add some notes to this visit
            </label>
          </div>
          {readState.nottoggle && (
            <textarea
              name="notes"
              id="notes"
              value={readState.notes}
              onChange={event =>
                this.props.handleGenericChange('notes', event.target.value)
              }
            />
          )}
        </div>
        <input
          type="checkbox"
          id="vert"
          checked={readState.vert}
          onChange={this.props.handleToggle}
        />{' '}
        <label htmlFor="vert">I would like to record my vert for the day</label>
      </fieldset>
    );
  }
}

export default AddBasics;
