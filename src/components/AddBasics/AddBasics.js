import React, { Component } from 'react';

export class AddBasics extends Component {
  render() {
    return (
      <fieldset name="add-basics">
        <legend>The Basics</legend>
        <label for="area">Location: </label>
        <select name="area" required>
          <option value="">Choose or add a location</option>
          <option value="keystone">Keystone</option>
          <option value="vail">Vail</option>
          <option value="add">Add a new location!</option>
        </select>
        <label for="new-area">Add a new location: </label>
        <input name="new-area" id="new-area" type="text" />
        <label for="type" required>
          What type of skiing did you do?
        </label>
        <select name="type" id="ski-type">
          <option value="downhill">downhill</option>
          <option value="x-c">cross country</option>
        </select>
        <label for="duration">
          How long did you ski? (optional) (hours:minutes)
        </label>
        <input
          type="text"
          placeholder="1:23"
          name="duration"
          id="ski-duration"
        />
      </fieldset>
    );
  }
}

export default AddBasics;
