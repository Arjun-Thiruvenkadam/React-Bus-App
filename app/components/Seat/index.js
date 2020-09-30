/**
 *
 * Seat
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './seat.scss';

const Seat = props => {
  let styleClasses = ['order'];
  let tooltipClass = 'hidden';
  let onClickHandler = props.clicked;

  if (props.status === 'closed') {
    tooltipClass = 'tooltipText';
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
  name: PropTypes.string,
  status: PropTypes.string,
  id: PropTypes.number,
  clicked: PropTypes.func,
};

export default Seat;
