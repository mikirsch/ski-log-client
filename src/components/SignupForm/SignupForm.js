import React, { Component } from 'react';
import AccountContext from '../../contexts/AccountContext';
import AuthApiService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';
import { onChangeUtil } from '../../Utilities/UtilityFunctions';

export class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      user_name: '',
      password: '',
      passwordConfirm: '',
      ok: false
    };
  }

  static contextType = AccountContext;

  onChange = event => {
    const newState = onChangeUtil(event, this.state);
    const { ok, error } = this.validate(newState);
    newState.ok = ok;
    newState.error = error;
    this.setState(newState);
  };

  validate = state => {
    let ok = true;
    let error = null;
    if (!state.user_name || !state.password || !state.passwordConfirm) {
      ok = false;
    } else if (state.password !== state.passwordConfirm) {
      ok = false;
      error = 'Passwords do not match';
    } else if (state.password.length < 8) {
      ok = false;
      error = 'Passwords must be at least 8 characters long';
    }

    return { ok, error };
  };

  handleSubmit = event => {
    console.log('event');
    event.preventDefault();
    this.setState({ error: null });
    const { user_name, password } = this.state;

    AuthApiService.postSignup({ user_name, password })
      .then(res => {
        this.setState({ password: '', passwordConfirm: '', ok: false });
        TokenService.saveAuthToken(res.authToken);
        const { onLogin } = this.context;
        onLogin();
        this.props.history.push('/dashboard');
      })
      .catch(res => {
        console.log(res);
        return null;
      });
  };
  render() {
    return (
      <div>
        <main role="main">
          <header role="banner">
            <h1>Start Tracking</h1>
          </header>
          <section>
            <h2>Sign Up</h2>
            {this.state.error && <p className="error">{this.state.error}</p>}
            <form name="signup" id="signup" action="">
              <label htmlFor="user_name">Username: </label>
              <input
                type="text"
                name="user_name"
                id="user_name"
                value={this.state.user_name}
                onChange={this.onChange}
              />
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                name="password"
                id="password"
                value={this.state.password}
                onChange={this.onChange}
              />
              <label htmlFor="passwordConfirm">Confirm password: </label>
              <input
                type="password"
                name="passwordConfirm"
                id="passwordConfirm"
                value={this.state.passwordConfirm}
                onChange={this.onChange}
              />
              <button
                type="button"
                name="signup"
                onClick={this.handleSubmit}
                disabled={!this.state.ok}
              >
                Sign up
              </button>
            </form>
          </section>
        </main>
      </div>
    );
  }
}

export default SignupForm;
