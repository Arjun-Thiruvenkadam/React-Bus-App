/**
 *
 * Backdrop
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import './backdrop.scss';

const Backdrop = props => {
  return props.show ? (
    <div className={'backdrop'} onClick={props.clicked} />
  ) : null;
};

Backdrop.propTypes = {
  show: PropTypes.bool.isRequired,
  clicked: PropTypes.func.isRequired,
};

export default Backdrop;
