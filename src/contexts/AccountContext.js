import React, { Component } from 'react';
import TokenService from '../services/token-service';

const AccountContext = React.createContext({
  loggedIn: null,
  onLogin: () => {},
  onLogout: () => {}
});

export default AccountContext;

export class AccountProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: TokenService.hasAuthToken() };
  }

  onLogin = () => {
    this.setState({ loggedIn: true });
  };
  onLogout = () => {
    TokenService.clearAuthToken();
    this.setState({ loggedIn: false });
  };
  render() {
    return (
      <AccountContext.Provider
        value={{
          loggedIn: this.state.loggedIn,
          onLogin: this.onLogin,
          onLogout: this.onLogout
        }}
      >
        {this.props.children}
      </AccountContext.Provider>
    );
  }
}

export const AccountConsumer = AccountContext.Consumer;
