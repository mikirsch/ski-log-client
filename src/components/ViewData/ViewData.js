import React, { Component } from 'react';
import TimeSelector from '../TimeSelector/TimeSelector';
import DataApiService from '../../services/data-api-service';
import ResultsViewer from '../ResultsViewer/ResultsViewer';

export class ViewData extends Component {
  state = {
    timeframe: 'custom',
    'result-type': 'list',
    chooseTime: true,
    results: []
  };

  onSelectChange = event => {
    const newState = { ...this.state };
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  };
  onResultTypeChange = event => {
    this.setState({ chooseTime: event.target.value !== 'notes-for-area' });
    this.onSelectChange(event);
  };

  handleSubmit = event => {
    console.log(event);
    event.preventDefault();
    let queryString = `?type=${this.state['result-type']}`;
    if (this.state.chooseTime) {
      const beginDate = document.getElementById('begin').value;
      const endDate = document.getElementById('end')
        ? document.getElementById('end').value
        : null;

      queryString += `&beginDate=${beginDate}`;
      queryString += endDate ? `&endDate=${endDate}` : '';
    }
    DataApiService.getLogs(queryString).then(results => {
      this.setState({ results });
      console.log('getting logs...');
      console.log(results);
    });
  };
  render() {
    return (
      <main role="main">
        <header role="banner">
          <h1>View My Activity</h1>
        </header>

        <section>
          <h2>What do you want to see?</h2>
          <form>
            <label htmlFor="timeframe">Choose a period</label>
            <select
              id="timeframe"
              value={this.state.timeframe}
              onChange={this.onSelectChange}
            >
              <option value="day">Day</option>
              <option value="month">Month</option>
              <option value="season">Season</option>
              <option value="all">All</option>
              <option value="custom">Custom</option>
            </select>
            <TimeSelector period={this.state.timeframe} />

            <select
              id="result-type"
              value={this.state['result-type']}
              onChange={this.onResultTypeChange}
            >
              <option value="summary-time">Summary of period</option>
              <option value="list">List all visits within period</option>
              <option value="list-notes">List visits with notes</option>
              <option value="summary-area">Summarize by ski area</option>
              <option value="area-time">Ski areas by time spent</option>
              <option value="notes-for-area">
                Find notes tied to a ski area
              </option>
            </select>
            <button type="button" onClick={this.handleSubmit}>
              Go
            </button>
          </form>
        </section>
        <section>
          <h2>Results</h2>
          <ResultsViewer results={this.state.results} />
        </section>
      </main>
    );
  }
}

export default ViewData;
