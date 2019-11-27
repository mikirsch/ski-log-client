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
          {' '}
          <span className="subresult">
            {this.formateDate(log.date)}
          </span> at <span className="subresult">{log.ski_area}</span>
          {(log.duration || log.vert) && `:`}
          <span className="subresult">
            {log.vert && ` vertical gained: ${log.vert}`}
          </span>
          <span className="subresult">
            {log.duration &&
              ` time: ${log.duration.hours}:${
                log.duration.minutes < 10
                  ? '0' + log.duration.minutes
                  : log.duration.minutes
              }`}
          </span>
        </p>
      </div>
    );
  }
}

export default DisplayLog;
