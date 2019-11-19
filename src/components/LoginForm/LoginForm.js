import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class LoginForm extends Component {
  render() {
    return (
      <div>
        <p>
          Not yet implemented, <Link to="/dashboard">go to dashboard</Link>
        </p>
        <main role="main">
          <header role="banner">
            <h1>Continue Tracking</h1>
          </header>

          <section>
            <header>
              <h2>Login</h2>
            </header>
            <form name="login" id="login" action="login">
              <label for="login-uname">Username: </label>
              <input type="text" name="login-uname" id="login-uname" />
              <label for="login-pass">Password: </label>
              <input type="password" name="login-pass" id="login-pass" />
              <button type="submit" name="login">
                Log in
              </button>
            </form>
            <p>Forgot username or password?</p>
          </section>
        </main>
      </div>
    );
  }
}

export default LoginForm;
