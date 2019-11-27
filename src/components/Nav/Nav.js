import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
// import TokenService from '../../services/token-service';
import AccountContext from '../../contexts/AccountContext';

export class Nav extends Component {
  static contextType = AccountContext;

  renderStatefulItems = () => {
    const { loggedIn, onLogout } = this.context;
    if (loggedIn) {
      return (
        <li>
          <Link to="/" onClick={onLogout}>
            Log out
          </Link>
        </li>
      );
    }

    return (
      <>
        <li>
          <Link to="/login">Log in</Link>
        </li>
        <li>
          <Link to="/signup">Sign up</Link>
        </li>
      </>
    );
  };

  render() {
    return (
      <div className="Nav">
        <ul className="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          {this.renderStatefulItems()}
        </ul>
      </div>
    );
  }
}

export default Nav;
