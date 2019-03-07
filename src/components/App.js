/* eslint-disable import/no-named-as-default */
import { NavLink, Route, Switch } from "react-router-dom";
import 'jquery';
import 'popper.js';
import 'bootstrap';

import AboutPage from "./AboutPage";
import FuelSavingsPage from "./containers/FuelSavingsPage";
import HomePage from "./HomePage";
import NotFoundPage from "./NotFoundPage";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    const activeStyle = { color: 'blue' };
    return (

      <div>
        <nav className="navbar navbar-expand navbar-light bg-light">
          <div className="navbar-nav-scroll">
            <ul className="navbar-nav bd-navbar-nav flex-row">
              <li className="nav-item active">
                <NavLink exact to="/" className="nav-link" activeStyle={activeStyle}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/fuel-savings" className="nav-link" activeStyle={activeStyle}>Users</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link" activeStyle={activeStyle}>Posts</NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/fuel-savings" component={FuelSavingsPage} />
          <Route path="/about" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
