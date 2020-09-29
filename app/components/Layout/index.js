/**
 *
 * Layout
 *
 */

import React,{ Fragment } from 'react';
import Toolbar from '../Toolbar/index';
import './layout.scss';

const Layout = (props) => {
  return (
    <Fragment>
      <Toolbar />
      <main className='Layout'>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
