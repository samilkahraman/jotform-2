import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Router, Route, Switch } from 'react-router';

import 'assets/scss/material-kit-pro-react.scss?v=1.8.0';

// pages for this product
import LoginPage from 'views/LoginPage/LoginPage.js';
import SignupPage from 'views/SignupPage/SignupPage.js';
import ErrorPage from 'views/ErrorPage/ErrorPage.js';
import DashboardPage from 'views/DashboardPage/DashboardPage';
import ProductDetailPage from 'views/ProductDetailPage';
import CategoryProductsPage from 'views/CategoryProductsPage';

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/login-page" component={LoginPage} />
      <Route path="/signup-page" component={SignupPage} />
      <Route path="/error-page" component={ErrorPage} />
      <Route exact path="/" component={DashboardPage} />
      <Route exact path="/dashboard" component={DashboardPage} />
      <Route path="/category/:key/:id" component={CategoryProductsPage} />
      <Route path="/product-detail" component={ProductDetailPage} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
