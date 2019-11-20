import React, { Component } from 'react';

export class DisplayLog extends Component {
  formateDate(date) {
    const parsed = new Date(date);
    return parsed.toISOString().split('T')[0];
  }
  render() {
    const log = this.props.log;

    return (
      <div>
        <p>
          Date: {this.formateDate(log.date)} Ski area: {log.ski_area}
        </p>
      </div>
    );
  }
}

export default DisplayLog;
