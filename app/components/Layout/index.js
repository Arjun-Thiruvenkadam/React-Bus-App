/**
 *
 * Layout
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Toolbar from '../Toolbar/index';
import './layout.scss';

const Layout = props => (
  <Fragment>
    <Toolbar />
    <main className="Layout">{props.children}</main>
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
