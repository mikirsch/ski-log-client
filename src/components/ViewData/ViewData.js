import React, { Component } from 'react';
import TimeSelector from '../TimeSelector/TimeSelector';
import DataApiService from '../../services/data-api-service';
import ResultsViewer from '../ResultsViewer/ResultsViewer';
import { formatDate, onChangeUtil } from '../../Utilities/UtilityFunctions';

export class ViewData extends Component {
  state = {
    timeframe: 'all',
    resultType: 'list',
    chooseTime: true,
    beginDate: formatDate(new Date()),
    endDate: formatDate(new Date()),
    results: [],
    searched: false
  };

  onChange = event => {
    const newState = onChangeUtil(event, this.state);
    this.setState(newState);
  };
  onResultTypeChange = event => {
    const newState = { chooseTime: event.target.value !== 'notes-for-area' };
    if (event.target.value === 'notes-for-area') {
      newState.timeframe = 'all';
    }
    this.setState(newState, this.onChange(event));
  };
  updateOther = target => {
    const newState = {};
    newState[target] = document.getElementById(target).value;
    this.setState(newState);
  };

  handleSubmit = event => {
    event.preventDefault();
    const options = { ...this.state };
    delete options.chooseTime;
    delete options.results;
    switch (options.timeframe) {
      case 'all':
        options.beginDate = '1900-01-01';
        break;
      case 'season':
        let year = options.beginDate.split('-')[0];
        options.beginDate = year + '-09-01'; //I know of some ski areas that have historically been open into August
        options.endDate = Number(year) + 1 + '-08-31';
        break;
      case 'month':
        let month = new Date(options.beginDate);
        options.beginDate = formatDate(
          new Date(month.getFullYear(), month.getMonth(), 1)
        );
        //day 0 is last day of previous month
        options.endDate = formatDate(
          new Date(month.getFullYear(), month.getMonth() + 1, 0)
        );
        break;
      case 'date':
        options.endDate = options.beginDate;
        break;
      default:
    }
    this.setState({ results: null, error: null });
    DataApiService.getLogs(options)
      .then(results => {
        this.setState({ results, searched: true });
      })
      .catch(e => 0);
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
              onChange={this.onChange}
              disabled={this.state.resultType === 'notes-for-area'}
            >
              <option value="date">Day</option>
              <option value="month">Month</option>
              <option value="season">Season</option>
              <option value="all">All</option>
              <option value="custom">Custom</option>
            </select>
            <TimeSelector
              period={this.state.timeframe}
              changeHandler={this.onChange}
              updateOther={this.updateOther}
              beginDate={this.state.beginDate}
              endDate={this.state.endDate}
            />

            <select
              id="resultType"
              value={this.state.resultType}
              onChange={this.onResultTypeChange}
            >
              <option value="summary-time">Summary of period</option>
              <option value="list">List all visits within period</option>
              <option value="list-notes">List visits with notes</option>
              <option value="summary-area">Summarize by ski area</option>
              {/* <option value="area-time">Ski areas by time spent</option> */}
              {/* <option value="notes-for-area">
                Find notes tied to a ski area
              </option> */}
            </select>
            <button type="button" onClick={this.handleSubmit}>
              Go
            </button>
          </form>
        </section>
        <section>
          <h2>Results</h2>
          {this.state.searched && !this.state.results && <p>No logs found</p>}
          <ResultsViewer
            results={this.state.results}
            type={this.state.resultType}
          />
        </section>
      </main>
    );
  }
}

export default ViewData;
