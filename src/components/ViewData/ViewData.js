import React, { Component } from 'react';
import TimeSelector from '../TimeSelector/TimeSelector';

export class ViewData extends Component {
  render() {
    return (
      <main role="main">
        <header role="banner">
          <h1>View My Activity</h1>
        </header>

        <section>
          <h2>What do you want to see?</h2>
          <form>
            <label for="timeframe">Choose a period</label>
            <select id="timeframe">
              <option value="day">Day</option>
              <option value="month">Month</option>
              <option value="season">Season</option>
              <option value="all">All</option>
              <option value="custom" selected>
                Custom
              </option>
            </select>
            <TimeSelector period={'custom'} />
            <input type="date" name="begin" id="begin" />
            <input type="date" name="end" id="end" />
            <select id="result-type">
              <option value="summary-time">Summary of period</option>
              <option value="list">List all visits within period</option>
              <option value="list-notes">List visits with notes</option>
              <option value="summary-area">Summarize by ski area</option>
              <option value="area-time">Ski areas by time spent</option>
              <option value="notes-for-area">
                Find notes tied to a ski area
              </option>
            </select>
            <button type="submit">Go</button>
          </form>
        </section>
        <section>
          <h2>Results</h2>
          <p>insert results here</p>
        </section>
      </main>
    );
  }
}

export default ViewData;
