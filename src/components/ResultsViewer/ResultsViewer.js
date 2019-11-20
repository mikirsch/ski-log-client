import React, { Component } from 'react';
import DisplayLog from '../DisplayLog/DisplayLog';

export class ResultsViewer extends Component {
  render() {
    if (this.props.results) {
      return (
        <div>
          {this.props.results.map(log => (
            <DisplayLog log={log} />
          ))}
        </div>
      );
    }
    console.log(this.props.results);
    return <div></div>;
  }
}

export default ResultsViewer;
