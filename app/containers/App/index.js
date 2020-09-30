/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import Orders from '../Orders/index';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Layout from '../../components/Layout/index';
import GlobalStyle from '../../global-styles';
import Auth from '../Auth/index';
import Logout from '../Auth/logout';

export default function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path='/order' component={Orders}/>
          <Route path='/login' component={Auth}/>
          <Route path="/logout" component={Logout}/>
          <Route component={NotFoundPage} />
        </Switch>
      </Layout>
      <GlobalStyle />
    </div>
  );
}
