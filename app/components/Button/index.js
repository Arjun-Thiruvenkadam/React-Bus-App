/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = props => (
  <button
    onClick={props.clicked}
    className={['Button', props.btnType].join(' ')}
    disabled={props.disable}
  >
    {props.children}
  </button>
);

Button.propTypes = {
  clicked: PropTypes.func,
  disable: PropTypes.bool,
  btnType: PropTypes.string,
};

export default Button;
