/**
 *
 * Backdrop
 *
 */

import React from 'react';
import StyledDiv from './backdrop';

function Backdrop(props) {
  return props.show ? <StyledDiv onClick={props.clicked}></StyledDiv> : null;
}

export default Backdrop;
