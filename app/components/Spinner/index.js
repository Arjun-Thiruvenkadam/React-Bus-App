/**
 *
 * Spinner
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import './spinner.scss';

const Spinner = () => (
  <div className="Loader">
    <h3>
      <FormattedMessage {...messages.header} />
    </h3>
  </div>
);

export default Spinner;
