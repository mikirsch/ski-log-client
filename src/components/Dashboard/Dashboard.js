import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ActivitySummary from '../ActivitySummary/ActivitySummary';
import DataApiService from '../../services/data-api-service';
import { formatDate } from '../../Utilities/UtilityFunctions';

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { logs: [], checked: false };
  }

  componentDidMount() {
    const options = {
      beginDate: '1900-01-01',
      endDate: formatDate(new Date())
    };
    DataApiService.getLogs(options).then(logs =>
      this.setState({ logs, checked: true })
    );
  }

  render() {
    return (
      <main role="main">
        <header role="banner">
          <h1>Welcome Back</h1>
        </header>

        <ActivitySummary logs={this.state.logs} checked={this.state.checked} />

        <section>
          <h2>Been Skiing?</h2>
          <p>
            <Link to="add-data">Add data</Link>
          </p>
        </section>
        <section>
          <h2>Dig Deeper</h2>
          <p>
            <Link to="view-data">View your activity</Link>
          </p>
        </section>
      </main>
    );
  }
}

export default Dashboard;
