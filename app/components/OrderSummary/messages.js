/*
 * OrderSummary Messages
 *
 * This contains all the text for the OrderSummary component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.OrderSummary';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Order Summary',
  },
  headMessage: {
    id: `${scope}.headMessage`,
    defaultMessage: 'Enjoy a safe and comfortable ride',
  },
  tickets: {
    id: `${scope}.tickets`,
    defaultMessage: 'Your tickets',
  },
  checkout: {
    id: `${scope}.checkout`,
    defaultMessage: 'Continue to checkout?',
  },
  cancel: {
    id: `${scope}.cancel`,
    defaultMessage: 'Cancel',
  },
  continue: {
    id: `${scope}.continue`,
    defaultMessage: 'Continue',
  },
});
