import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
// import TokenService from '../../services/token-service';
import AccountContext from '../../contexts/AccountContext';

export class Nav extends Component {
  static contextType = AccountContext;
  state = {
    expanded: false
  };

  toggleExpand = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  renderStatefulItems = () => {
    const { loggedIn, onLogout } = this.context;
    if (loggedIn) {
      return (
        <>
          {' '}
          <li>
            <Link to="/dashboard" onClick={this.toggleExpand}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={() => {
                onLogout();
                this.toggleExpand();
              }}
            >
              Log out
            </Link>
          </li>
        </>
      );
    }

    return (
      <>
        <li>
          <Link to="/login" onClick={this.toggleExpand}>
            Log in
          </Link>
        </li>
        <li>
          <Link to="/signup" onClick={this.toggleExpand}>
            Sign up
          </Link>
        </li>
      </>
    );
  };

  render() {
    return (
      <div className="Nav">
        <ul className={`navbar ${this.state.expanded || 'min'}`}>
          <li className="nav-menu">
            <button onClick={this.toggleExpand}>
              <i
                className={`fas fa-${this.state.expanded ? 'times' : 'bars'}`}
              ></i>
            </button>
          </li>
          <li>
            <Link to="/" onClick={this.toggleExpand}>
              Home
            </Link>
          </li>
          {this.renderStatefulItems()}
        </ul>
      </div>
    );
  }
}

export default Nav;
