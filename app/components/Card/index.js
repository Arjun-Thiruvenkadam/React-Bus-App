/**
 *
 * Card
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import './card.scss';

const Card = (props) => (
  <div className='Card'>
      <img src={props.image} alt={props.name}></img>
      <h3>{props.name}</h3>
      <p>{props.children}</p>
  </div>
);

Card.propTypes = {
  name: PropTypes.string,
};

export default Card;
