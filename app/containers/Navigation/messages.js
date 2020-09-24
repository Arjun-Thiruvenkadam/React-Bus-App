/*
 * Navigation Messages
 *
 * This contains all the text for the Navigation container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Navigation';

export default defineMessages({
  book: {
    id: `${scope}.book`,
    defaultMessage: 'Book Tickets',
  },
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
});
