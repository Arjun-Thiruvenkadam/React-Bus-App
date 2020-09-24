/**
 *
 * Spinner
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import H3 from '../H3/index';
import StyledSpinner from './spinner';

const Spinner = () => (
  <StyledSpinner>
    <H3>
      <FormattedMessage {...messages.header} />
    </H3>
  </StyledSpinner>
);

export default Spinner;
