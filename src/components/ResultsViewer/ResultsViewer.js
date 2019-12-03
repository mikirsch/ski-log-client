import React, { Component } from 'react';
import DisplayLog from '../DisplayLog/DisplayLog';
import DisplayArea from '../DisplayArea/DisplayArea';
import ActivityByTime from '../ActivityByTime/ActivityByTime';

export class ResultsViewer extends Component {
  listResults = results => (
    <div>
      {results.map(log => (
        <DisplayLog log={log} key={log.date + log.ski_area} />
      ))}
    </div>
  );

  summaryTime = results => {
    return <ActivityByTime logs={results} filter={false} />;
  };

  summaryArea = results => {
    const areas = Array.from(new Set(results.map(result => result.ski_area)));
    console.log(areas);
    return (
      <ul>
        {areas.map(area => {
          console.log(area);
          const days = results.reduce(
            (acc, cur) => (cur.ski_area === area ? ++acc : acc),
            0
          );
          return <DisplayArea area={area} days={days} key={area} />;
        })}
      </ul>
    );
  };

  render() {
    const results = this.props.results;

    if (results) {
      results.sort((a, b) => b.date < a.date);
      switch (this.props.type) {
        case 'list':
          return this.listResults(results);
        case 'list-notes':
          return this.listResults(results.filter(result => !!result.notes));
        case 'summary-time':
          return this.summaryTime(results);
        case 'summary-area':
          return this.summaryArea(results);
        default:
          return <p>Result type not supported</p>;
      }
    }
    return <div></div>;
  }
}

export default ResultsViewer;

/*
              <option value="summary-time">Summary of period</option>
              <option value="list">List all visits within period</option>
              <option value="list-notes">List visits with notes</option>
              <option value="summary-area">Summarize by ski area</option>
              <option value="area-time">Ski areas by time spent</option>
              <option value="notes-for-area">
                Find notes tied to a ski area
              </option> */
