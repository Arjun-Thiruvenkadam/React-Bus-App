/**
 *
 * NavigationItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './navigationItem.scss';

const NavigationItem = props => (
  <li className="NavigationItem">
    <NavLink to={props.link} exact={props.exact} activeClassName="active">
      {props.children}
    </NavLink>
  </li>
);

NavigationItem.propTypes = {
  link: PropTypes.any,
  exact: PropTypes.bool,
  children: PropTypes.any,
};

export default NavigationItem;
