import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/"> APP </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link className="navbar-brand" to="/create"> create Item </Link>
                </li>
                <li className="nav-item">
                  <Link className="navbar-brand" to="/"> AP333P </Link>
                </li>

              </ul>
            </div>
          </div>

        </nav>
      </div>
    );
  }
}
