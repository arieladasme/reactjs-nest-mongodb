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
                  <Link className="navbar-brand" to="/create"> Create </Link>
                </li>
                <li className="nav-item">
                  <input className="form-control navbar-brand" type="search" placeholder="Search" aria-label="Search" />
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-success my-2 my-sm-1" type="submit">Search</button>
                </li>

              </ul>
            </div>
          </div>

        </nav>
      </div>
    );
  }
}
