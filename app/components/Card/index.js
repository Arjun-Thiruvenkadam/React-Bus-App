/**
 *
 * Card
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import './card.scss';

const Card = props => (
  <div className="Card">
    <img src={props.image} alt={props.name} />
    <h3>{props.name}</h3>
    <p>{props.children}</p>
  </div>
);

Card.propTypes = {
  image: PropTypes.any,
  name: PropTypes.string,
  children: PropTypes.any,
};

export default Card;
