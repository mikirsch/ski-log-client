import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AuthApiService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';

export class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  handleSubmitJwtAuth = event => {
    event.preventDefault();
    this.setState({ error: null });
    const { user_name, password } = event.target;

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value
    })
      .then(res => {
        user_name.value = '';
        password.value = '';
        TokenService.saveAuthToken(res.authToken);
        this.props.history.push('/dashboard');
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <form className="LoginForm" onSubmit={this.handleSubmitJwtAuth}>
        <div role="alert">
          {error && <p className="login-error error">{<>error</>}</p>}
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
      </form>
    );
  }
}

export default withRouter(LoginForm);
