import React, { Component } from 'react';

export class SignupForm extends Component {
  render() {
    return (
      <div>
        <main role="main">
          <header role="banner">
            <h1>Start Tracking</h1>
          </header>
          <section>
            <h2>Sign Up</h2>

            <form name="signup" id="signup" actoin="signup">
              <label for="signup-uname">Username: </label>
              <input type="text" name="signup-uname" id="signup-uname" />
              <label for="signup-pass">Password: </label>
              <input type="password" name="signup-pass" id="signup-pass" />
              <label for="confirm-pass">Confirm password: </label>
              <input type="password" name="confirm-pass" id="confirm-pass" />
              <button type="submit" name="signup">
                Sign up
              </button>
            </form>

            <p>
              Warning: if you do not provide your email address, we cannot
              remind you of your username or reset a forgotten password. You can
              always add your email address later if you'd prefer.
            </p>
          </section>
        </main>
      </div>
    );
  }
}

export default SignupForm;
