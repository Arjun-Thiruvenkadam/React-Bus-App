/**
 *
 * Navigation
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import NavigationBar from './navigationBar';
import NavigationHolder from './navigationHolder';
import NavigationItem from './navigationItem';
import Logo from '../../components/Logo/index';

import messages from './messages';

function Navigation() {
  return (
    <NavigationBar>
      <Logo/>
      <NavigationHolder>
        <NavigationItem link="/" exact>
          <FormattedMessage {...messages.home} />
        </NavigationItem>
        <NavigationItem link="/order">
          <FormattedMessage {...messages.book} />
        </NavigationItem>
      </NavigationHolder>
    </NavigationBar>
  );
}

const withConnect = connect(
  null,
  null,
);

export default compose(withConnect)(Navigation);
