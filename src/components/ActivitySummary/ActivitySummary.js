import React, { Component } from 'react';
import ActivityByTime from '../ActivityByTime/ActivityByTime';

export class ActivitySummary extends Component {
  render() {
    return (
      <div>
        <h2>My Activity</h2>
        {this.props.checked && this.props.logs.length && (
          <>
            <ActivityByTime
              time="month"
              current={true}
              logs={this.props.logs}
            />
            <ActivityByTime
              time="season"
              current={true}
              logs={this.props.logs}
            />
          </>
        )}
        {this.props.checked && this.props.logs.length == 0 && (
          <p>We can't seem to find any record of your activity.</p>
        )}
        {!this.props.checked && <p>Summarizing your activity...</p>}
      </div>
    );
  }
}

export default ActivitySummary;
