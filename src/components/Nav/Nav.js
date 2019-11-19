import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <ul className="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Log in</Link>
          </li>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
