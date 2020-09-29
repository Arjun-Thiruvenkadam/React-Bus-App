/*
 *
 * Orders actions
 *
 */

import * as actionTypes from './constants';

export function bookTicket() {
  return {
    type: actionTypes.BOOK_TICKET,
  };
}

export function showSpinner() {
  return {
    type: actionTypes.SHOW_SPINNER,
  };
}

export function hideSpinner() {
  return {
    type: actionTypes.HIDE_SPINNER,
  };
}

export function saveTickets(tickets) {
  return {
    type: actionTypes.SAVE_TICKETS,
    tickets,
  };
}

export function cancelOrder() {
  return {
    type: actionTypes.CANCEL_ORDER,
  };
}

export function selectTicket(ticketId) {
  return {
    type: actionTypes.SELECT_TICKET,
    ticketId,
  };
}

export function fetchData() {
  return {
    type: actionTypes.FETCH_DATA,
  };
}

export function completeBooking() {
  return {
    type: actionTypes.COMPLETE_BOOKING,
  };
}

export function clearSelection() {
  return {
    type: actionTypes.CLEAR_SELECTION,
  };
}

export function update() {
  return {
    type: actionTypes.UPDATE,
  };
}
