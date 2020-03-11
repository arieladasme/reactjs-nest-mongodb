import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/"> APP </Link>
            <Link className="navbar-brand" to="/create"> Create </Link>

          </div>

        </nav>
      </div>
    );
  }
}
