import React, { Component } from 'react';

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
          <a href="dashboard.html"> Try Now</a>
        </section>

        <section>
          <a href="login-signup.html">Log In or Sign Up</a>
        </section>
      </main>
    );
  }
}

export default Splash;
