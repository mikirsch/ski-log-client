import React, { Component } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import './App.css';
import Splash from '../Splash/Splash';
import { Route, Switch } from 'react-router-dom';
import Nav from '../Nav/Nav';
import LoginForm from '../LoginForm/LoginForm';
import SignupForm from '../SignupForm/SignupForm';
import AddData from '../AddData/AddData';
import ViewData from '../ViewData/ViewData';
import PublicOnlyRoute from '../../Utilities/PublicOnlyRoute';
import PrivateRoute from '../../Utilities/PrivateRoute';
import TokenService from '../../services/token-service';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: TokenService.hasAuthToken() };
  }
  onLogin = function() {
    this.setState({ loggedIn: true });
  };
  onLogout = () => {
    this.setState({ loggedIn: false });
  };
  render() {
    return (
      <div className="App">
        <Nav loggedIn={this.state.loggedIn} onLogout={this.onLogout} />
        <main className="App main">
          <Switch>
            <Route exact path="/" component={Splash} />
            <PublicOnlyRoute
              exact
              path="/login"
              component={LoginForm}
              onLogin={this.onLogin}
            />
            <PublicOnlyRoute exact path="/signup" component={SignupForm} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/add-data" component={AddData} />
            <PrivateRoute exact path="/view-data" component={ViewData} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
