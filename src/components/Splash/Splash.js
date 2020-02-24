import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AccountContext from '../../contexts/AccountContext';
import './Splash.css';

export class Splash extends Component {
  static contextType = AccountContext;
  render() {
    return (
      <main role="main" className="splash-main">
        <header role="banner">
          <h1>Fresh Tracks</h1>
          <h2>Ski tracking. Unconstrained.</h2>
          <img
            className="splash-image"
            src="/pexels-photo-326260.jpeg"
            alt=""
          />
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

          {this.context.loggedIn ? (
            <p>
              <Link to="dashboard">Go to dashboard</Link> or{' '}
              <Link to="/" onClick={this.context.onLogout}>
                log out
              </Link>
              .
            </p>
          ) : (
            <p>
              <Link to="login">Log In</Link> or <Link to="signup">Sign Up</Link>
            </p>
          )}
        </section>
      </main>
    );
  }
}

export default Splash;
