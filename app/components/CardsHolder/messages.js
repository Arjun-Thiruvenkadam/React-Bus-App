/*
 * CardsHolder Messages
 *
 * This contains all the text for the CardsHolder component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.CardsHolder';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: "Let's start your journey",
  },
  card1: {
    id: `${scope}.card1`,
    defaultMessage:
      'We provide only the best for our customers.We take extra measures to ensure your safe travel.',
  },
  card2: {
    id: `${scope}.card2`,
    defaultMessage:
      'We always give you the lowest price with the best partner offers.',
  },
  book: {
    id: `${scope}.book`,
    defaultMessage: 'Book Tickets',
  },
});
