/**
 *
 * Navigation
 *
 */
/* eslint-disable react/prop-types */

import React, { Fragment } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import messages from './messages';
import { makeSelectAuthenticated } from '../Auth/selectors';
import NavigationItem from '../../components/NavigationItem/index';
import './navigationHolder.scss';

function Navigation(props) {
  const isAuth = props.auth;
  let logAuth = null;
  if (isAuth) {
    logAuth = (
      <NavigationItem link="/logout">
        <FormattedMessage {...messages.logout} />
      </NavigationItem>
    );
  } else {
    logAuth = (
      <NavigationItem link="/login">
        <FormattedMessage {...messages.login} />
      </NavigationItem>
    );
  }

  return (
    <Fragment>
      <ul className="NavigationItems">
        <NavigationItem link="/" exact>
          <FormattedMessage {...messages.home} />
        </NavigationItem>
        <NavigationItem link="/order">
          <FormattedMessage {...messages.book} />
        </NavigationItem>
        {logAuth}
      </ul>
    </Fragment>
  );
}

const mapStateToProps = createStructuredSelector({
  auth: makeSelectAuthenticated(),
});

const withConnect = connect(
  mapStateToProps,
  null,
);

export default compose(withConnect)(Navigation);
