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
    newState.ok = this.validate();
    this.setState(newState);
  };

  validate = () => {
    let ok = true;
    if (
      !this.state.user_name ||
      !this.state.password ||
      !this.state.passwordConfirm
    ) {
      ok = false;
    } else if (this.state.password !== this.state.passwordConfirm) {
      ok = false;
    } else if (this.state.password.length < 8) {
      ok = false;
    } else if (this.state.user_name.length < 1) {
      ok = false;
    }

    return ok;
  };

  handleSubmit = event => {
    console.log('event');
    event.preventDefault();
    this.setState({ error: null });
    const { user_name, password } = event.target;

    AuthApiService.postSignup({ user_name, password })
      .then(res => {
        this.setState({ password: '', passwordConfirm: '', ok: false });
        TokenService.saveAuthToken(res.authToken);
        const { onLogin } = this.context;
        onLogin();
        this.props.history.push('/dashboard');
      })
      .catch(res => {
        this.setState({ error: res.error });
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
