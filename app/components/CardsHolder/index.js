/**
 *
 * CardsHolder
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Holder from './holder';
import Card from '../Card/index';
import Safety from '../../images/safety.png';
import Price from '../../images/price.png';
import StyledNavLink from '../StyledNavLink/index';
import H3 from '../H3/index';

const CardsHolder = () => {
  return (
    <Holder>
      <br/>
      <H3>
        <FormattedMessage {...messages.header} />
      </H3>
      <br/>
      <Card image={Safety} name="Safety">
        <FormattedMessage {...messages.card1} />
      </Card>
      <Card image={Price} name="Price">
        <FormattedMessage {...messages.card2} />
      </Card>
      <br />
      <br />
      <StyledNavLink to="/">
        <FormattedMessage {...messages.book} />
      </StyledNavLink>
      <br />
      <br />
    </Holder>
  );
};

export default CardsHolder;
