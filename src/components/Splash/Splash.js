import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Splash extends Component {
  render() {
    return (
      <main role="main">
        <header role="banner">
          <h1>Fresh Tracks</h1>
          <h2>Ski tracking. Unconstrained.</h2>
        </header>

        <section>
          <header>
            <h3>Track your skiing in one place</h3>
          </header>
          <p>
            Keep track of what you've done each winter without worrying about
            who runs the mountain. View every last detail of your history, or
            glance at annual statistics.
          </p>
        </section>

        <section>
          <Link to="login">Log In</Link> or <Link to="signup">Sign Up</Link>
        </section>
      </main>
    );
  }
}

export default Splash;
