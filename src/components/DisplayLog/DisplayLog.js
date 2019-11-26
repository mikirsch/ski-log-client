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
          Date: {this.formateDate(log.date)} Ski area: {log.ski_area}{' '}
          {log.vert && `Vert: ${log.vert}`}{' '}
          {log.duration &&
            `Duration: ${log.duration.hours}:${
              log.duration.minutes < 10
                ? '0' + log.duration.minutes
                : log.duration.minutes
            }`}
        </p>
      </div>
    );
  }
}

export default DisplayLog;
