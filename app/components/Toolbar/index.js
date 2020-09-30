/**
 *
 * Toolbar
 *
 */

import React from 'react';
import Logo from '../Logo/index';
import NavigationItems from '../../containers/Navigation/index';
import './toolbar.scss';

const Toolbar = () => (
  <header className="Toolbar">
    <Logo />
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default Toolbar;
