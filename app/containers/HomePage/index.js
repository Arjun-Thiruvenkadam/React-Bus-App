/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import H1 from '../../components/H1/index';
import Bus from '../../images/bus.png';
import Image from '../../components/Image/index';
import PrimaryContainer from '../../components/PrimaryContainer/index';
import CardsHolder from '../../components/CardsHolder/index';
import Button from '../../components/Button/index';

export default function HomePage() {
  return (
    <PrimaryContainer>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
      <Image src={Bus} alt="Bus" />
      <CardsHolder />
    </PrimaryContainer>
  );
}
