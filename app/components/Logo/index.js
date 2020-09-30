/**
 *
 * Logo
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Bus from '../../images/bus.png';
import './logo.scss';

function Logo() {
  return (
    <div className="Logo">
      <img src={Bus} alt="Bus" />
      <p>
        <FormattedMessage {...messages.logo} />
      </p>
    </div>
  );
}

export default Logo;
