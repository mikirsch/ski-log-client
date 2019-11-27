import React, { Component } from 'react';

export class ActivityByTime extends Component {
  defaultProps;
  render() {
    const { time, current, start, filter } = this.props;
    this.defaultProps = { filter: true };
    let beginDate = current ? new Date() : new Date(start);
    let endDate;
    let timeString = '';
    switch (time) {
      case 'month':
        timeString = current
          ? 'This Month'
          : `Month of ${beginDate.toLocaleDateString('en-US', {
              month: 'long',
              year: 'numeric'
            })}`;
        beginDate = new Date(beginDate.getFullYear(), beginDate.getMonth(), 1);
        endDate = new Date(
          beginDate.getFullYear(),
          beginDate.getMonth() + 1,
          0
        );
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
          ? 'This Season'
          : `Season of ${beginDate.getFullYear()}-${beginDate.getFullYear() +
              1}`;
        beginDate = new Date(beginDate.getFullYear(), 8, 1);
        endDate = new Date(beginDate.getFullYear() + 1, 8, 0);
        break;

      default:
    }
    let logs = this.props.logs;
    if (filter) {
      logs = logs.filter(log => {
        const logDate = Date.parse(log.date);
        return logDate > beginDate && logDate < endDate;
      });
    }
    const areas = Array.from(new Set(logs.map(log => log.ski_area))).sort();
    let areasString =
      areas.length > 1
        ? areas.slice(0, -1).join(', ') + ' and ' + areas.slice(-1)
        : areas[0];
    const days = new Set(logs.map(log => log.date)).size;
    const vert = logs.reduce((acc, cur) => acc + cur.vert, 0);
    const daysWithVert = new Set(
      logs.filter(log => log.vert > 0).map(log => log.date)
    ).size;

    return (
      <section>
        {timeString && <h3>{`${timeString}`}</h3>}
        <p>
          {days} days, at {areasString}. {vert} ft of vertical recorded (an
          average of {vert / daysWithVert} per day with vertical recorded).
        </p>
        {/* TODO: chart */}
        {/* Chart should show past month along the x-axis, activity at each area on y-axis */}
      </section>
    );
  }
}

export default ActivityByTime;
