/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Bus from '../../images/bus.png';
import CardsHolder from '../../components/CardsHolder/index';
import './home.scss';

export default function HomePage() {
  return (
    <div className="Home">
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <img src={Bus} alt="Bus" />
      <CardsHolder />
    </div>
  );
}
