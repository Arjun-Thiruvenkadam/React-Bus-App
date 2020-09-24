/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import StyledButton from './button';

function Button(props) {
  return (
    <StyledButton
      onClick={props.clicked}
      disabled={props.disable}
      btnType={props.btnType}
    >
      {props.children}
    </StyledButton>
  );
}

Button.propTypes = {
  clicked: PropTypes.func,
  disable: PropTypes.bool,
  btnType: PropTypes.string,
};

export default Button;
