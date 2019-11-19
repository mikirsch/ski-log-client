import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ActivitySummary from '../ActivitySummary/ActivitySummary';

export class Dashboard extends Component {
  render() {
    return (
      <main role="main">
        <header role="banner">
          <h1>Welcome Back</h1>
        </header>

        <ActivitySummary />

        <section>
          <h2>Been Skiing?</h2>
          <p>quick add form?</p>
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
