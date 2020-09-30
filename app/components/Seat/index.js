/**
 *
 * Seat
 *
 */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './seat.scss';

const Seat = props => {
  const styleClasses = ['order'];
  let onClickHandler = props.clicked;

  if (props.status === 'closed') {
    styleClasses.push('red');
    onClickHandler = null;
  } else if (props.status === 'booking') {
    styleClasses.push('booking');
  }

  return (
    <Fragment>
      <div className={styleClasses.join(' ')} onClick={onClickHandler}>
        <p>SEAT : {props.id}</p>
      </div>
    </Fragment>
  );
};

Seat.propTypes = {
  status: PropTypes.string,
  id: PropTypes.number,
  clicked: PropTypes.func,
};

export default Seat;
