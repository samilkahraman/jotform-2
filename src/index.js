/*!

=========================================================
* Material Kit PRO React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";

import "assets/scss/material-kit-pro-react.scss?v=1.8.0";

// pages for this product
import LoginPage from "views/LoginPage/LoginPage.js";
import SignupPage from "views/SignupPage/SignupPage.js";
import ErrorPage from "views/ErrorPage/ErrorPage.js";
import DashboardPage from "views/DashboardPage/DashboardPage";
import ProductPage from 'views/ProductPage/ProductPage'
import AllProductsPage from "views/AllProductsPage/AllProductsPage";
var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/login-page" component={LoginPage} />
      <Route path="/signup-page" component={SignupPage} />
      <Route path="/error-page" component={ErrorPage} />
      <Route exact path="/" component={DashboardPage} />
      <Route exact path="/dashboard" component={DashboardPage} />
      <Route path='/product/:key/:id' component={ProductPage} />
      <Route path='/category/:key/:id' component={AllProductsPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
