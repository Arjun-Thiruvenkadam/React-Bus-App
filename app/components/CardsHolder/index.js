/**
 *
 * CardsHolder
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';
import messages from './messages';
import Card from '../Card/index';
import Safety from '../../images/safety.png';
import Price from '../../images/price.png';
import './holder.scss';

const CardsHolder = () => (
  <div className="CardsHolder">
    <br />
    <h3>
      <FormattedMessage {...messages.header} />
    </h3>
    <br />
    <Card image={Safety} name="Safety">
      <FormattedMessage {...messages.card1} />
    </Card>
    <Card image={Price} name="Price">
      <FormattedMessage {...messages.card2} />
    </Card>
    <br />
    <br />
    <NavLink className="Navlink" to="/order">
      <FormattedMessage {...messages.book} />
    </NavLink>
    <br />
    <br />
  </div>
);

export default CardsHolder;
