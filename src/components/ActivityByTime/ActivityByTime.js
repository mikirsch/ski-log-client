import React, { Component } from 'react';

export class ActivityByTime extends Component {
  render() {
    const { time, current, start } = this.props;
    const beginDate = current ? null : new Date(start);
    let timeString;
    switch (time) {
      case 'month':
        timeString = current
          ? 'This Month'
          : `Month of ${beginDate.toLocaleDateString('en-US', {
              month: 'long',
              year: 'numeric'
            })}`;
        break;
      case 'week':
        timeString = current
          ? 'This Week'
          : `Week of ${beginDate.toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}`;
        break;
      case 'season':
        timeString = current
          ? 'This season'
          : `Season of ${beginDate.getFullYear()}-${beginDate.getFullYear() +
              1}`;
        break;

      default:
        throw new Error('Invalid time parameter');
    }
    return (
      <section>
        <h3>{`${timeString}`}</h3>
        <p>
          12 days, at Vail, Aspen, and Beaver Creek. 200,000 ft of vertical
          gained.
        </p>
        <p>TODO: chart</p>
        {/* Chart should show past month along the x-axis, activity at each area on y-axis */}
      </section>
    );
  }
}

export default ActivityByTime;
