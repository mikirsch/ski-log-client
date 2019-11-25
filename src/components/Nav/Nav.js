import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import TokenService from '../../services/token-service';

export class Nav extends Component {
  logout = () => {
    TokenService.clearAuthToken();
    this.props.onLogout();
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
          {TokenService.hasAuthToken() ? (
            <li>
              <Link to="/" onClick={this.logout}>
                Log out
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link to="/login">Log in</Link>
              </li>
              <li>
                <Link to="/signup">Sign up</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    );
  }
}

export default Nav;
