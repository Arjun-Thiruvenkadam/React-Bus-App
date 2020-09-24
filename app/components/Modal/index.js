/**
 *
 * Modal
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import StyledModal from './modal';
import Backdrop from '../Backdrop/index';

const Modal = props => {
  return (
    <Fragment>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <StyledModal
        style={{
          visibility: props.show ? 'visible' : 'hidden',
          opacity: props.show ? '1' : '0',
        }}
      >
        {props.children}
      </StyledModal>
    </Fragment>
  );
};

Modal.propTypes = {
  show: PropTypes.bool,
  modalClosed: PropTypes.func.isRequired,
};

export default Modal;
