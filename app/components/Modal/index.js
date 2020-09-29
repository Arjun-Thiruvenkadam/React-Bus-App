/**
 *
 * Modal
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Backdrop from '../Backdrop/index';
import './modal.scss';

const Modal = props => (
  <Fragment>
    <Backdrop show={props.show} clicked={props.modalClosed} />
    <div
      className='Modal'
      style={{
        visibility: props.show ? 'visible' : 'hidden',
        opacity: props.show ? '1' : '0',
      }}
    >
      {props.children}
    </div>
  </Fragment>
);

Modal.propTypes = {
  show: PropTypes.bool,
  modalClosed: PropTypes.func.isRequired,
};

export default Modal;
