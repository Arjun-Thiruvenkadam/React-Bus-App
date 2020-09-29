/*
 *
 * Orders reducer
 *
 */
import produce from 'immer';
import * as actionTypes from './constants';
import * as utility from './utility';

export const initialState = {
  tickets: [],
  ordering: false,
  selectedTickets: [],
  shouldUpdate: false,
  showSpinner: false,
};

/* eslint-disable default-case, no-param-reassign */
const ordersReducer = (state = initialState, action) =>
  produce(state, nextState => {
    switch (action.type) {
      case actionTypes.BOOK_TICKET:
        nextState.ordering = true;
        break;
      case actionTypes.CANCEL_ORDER:
        nextState.ordering = false;
        nextState.showSpinner = false;
        break;
      case actionTypes.SELECT_TICKET:
        utility.selectTicket(action.ticketId, state, nextState);
        break;
      case actionTypes.SHOW_SPINNER:
        nextState.showSpinner = true;
        break;
      case actionTypes.HIDE_SPINNER:
        nextState.showSpinner = false;
        break;
      case actionTypes.SAVE_TICKETS:
        nextState.tickets = action.tickets;
        break;
      case actionTypes.CLEAR_SELECTION:
        nextState.selectedTickets = [];
        break;
      case actionTypes.UPDATE:
        nextState.shouldUpdate = true;
        break;
    }
  });

export default ordersReducer;
