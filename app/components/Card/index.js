/**
 *
 * Card
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import CardStyle from './card';
import Image from '../Image/index';

const Card = (props) => {
  return (
    <CardStyle>
      <Image src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.children}</p>
    </CardStyle>
  );
}

Card.propTypes = {
  name: PropTypes.string,
};

export default Card;
