/* eslint-disable react/prop-types */
import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from './actions';

export function Logout(props) {
  localStorage.setItem('userId', '');
  props.logoutHandler();
  return <Redirect to="/" />;
}

export function mapDispatchToProps(dispatch) {
  return {
    logoutHandler: () => dispatch(actions.logout()),
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Logout);
