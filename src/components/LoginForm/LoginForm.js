import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AuthApiService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';
import AccountContext from '../../contexts/AccountContext';

export class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static contextType = AccountContext;
  handleSubmitJwtAuth = event => {
    event.preventDefault();
    this.setState({ error: null });
    const { user_name, password } = event.target;
    const username = user_name.value;
    const pass = password.value;
    AuthApiService.postLogin(username, pass)
      .then(res => {
        user_name.value = '';
        password.value = '';
        TokenService.saveAuthToken(res.authToken);
        const { onLogin } = this.context;
        onLogin();
        this.props.history.push('/dashboard');
      })
      .catch(e => {
        this.setState({ error: e.error });
      });
  };

  demo = () => {
    this.setState({ error: null });
    AuthApiService.postLogin('', '', true).then(res => {
      TokenService.saveAuthToken(res.authToken);
      this.context.onLogin();
      this.props.history.push('/dashboard');
    });
  };

  render() {
    const { error } = this.state;
    return (
      <form className="LoginForm" onSubmit={this.handleSubmitJwtAuth}>
        <div role="alert">
          {error && <p className="login-error error">{this.state.error}</p>}
        </div>
        <div className="user_name">
          <label htmlFor="LoginForm__user_name">User name</label>
          <input required name="user_name" id="LoginForm__user_name" />
        </div>
        <div className="password">
          <label htmlFor="LoginForm__password">Password</label>
          <input
            required
            name="password"
            type="password"
            id="LoginForm__password"
          />
        </div>
        <button type="submit">Login</button>
        <button type="button" onClick={this.demo}>
          Demo
        </button>
      </form>
    );
  }
}

export default withRouter(LoginForm);
