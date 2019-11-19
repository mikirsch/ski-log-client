import React, { Component } from 'react';
import ActivityByTime from '../ActivityByTime/ActivityByTime';

export class ActivitySummary extends Component {
  render() {
    return (
      <div>
        <h2>My Activity</h2>
        <ActivityByTime time="month" current={true} />
        <ActivityByTime time="season" current={true} />
      </div>
    );
  }
}

export default ActivitySummary;
