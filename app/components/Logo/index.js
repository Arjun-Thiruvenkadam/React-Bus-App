/**
 *
 * Logo
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import LogoStyle from './logoStyle';
import Bus from '../../images/bus.png';

function Logo() {
  return (
    <LogoStyle>
      <img src={Bus} alt="Bus" />
      <p>
        <FormattedMessage {...messages.logo} />
      </p>
    </LogoStyle>
  );
}

export default Logo;
