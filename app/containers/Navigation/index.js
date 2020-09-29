/**
 *
 * Navigation
 *
 */

import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import messages from './messages';
import NavigationItem from '../../components/NavigationItem/index';
import './navigationHolder.scss';

function Navigation() {
  return (
    <Fragment>
      <ul className='NavigationItems'>
        <NavigationItem link="/" exact>
          <FormattedMessage {...messages.home} />
        </NavigationItem>
        <NavigationItem link="/order">
          <FormattedMessage {...messages.book} />
        </NavigationItem>
      </ul>
    </Fragment>
  );
}

const withConnect = connect(
  null,
  null,
);

export default compose(withConnect)(Navigation);
