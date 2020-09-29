import { takeEvery, put, select } from 'redux-saga/effects';
import * as actionTypes from './constants';
import * as actions from './actions';
import axios from 'axios';
import * as selectors from './selectors';
import { createTicket, updateTickets } from './utility';

// Individual exports for testing
export default function* ordersSaga() {
  // See example in containers/HomePage/saga.js
  yield takeEvery(actionTypes.FETCH_DATA, fetchDataSaga);
  yield takeEvery(actionTypes.COMPLETE_BOOKING, completeBookingSaga);
}

export function* fetchDataSaga() {
  yield put(actions.showSpinner());
  const response = yield axios.get(
    'https://nestjs-bus-api.herokuapp.com/tickets',
  );
  const tickets = response.data.sort((a, b) => a.ticketId - b.ticketId);
  yield put(actions.saveTickets(tickets));
  yield put(actions.hideSpinner());
}

export function* completeBookingSaga() {
  let tickets = yield select(selectors.makeSelectTickets());
  let selectedTickets = yield select(selectors.makeSelectSelectedTickets());
  let ticketsPayload = [];
 
  yield put(actions.showSpinner());
  const userId = yield localStorage.getItem('userId');
  selectedTickets.forEach(ticket => {
    ticketsPayload.push(createTicket(ticket, userId));
  });

  let response = yield axios.put(
    'https://nestjs-bus-api.herokuapp.com/tickets/update',
    ticketsPayload,
  );
  yield put(actions.saveTickets(updateTickets(tickets, response.data, userId)));
  yield put(actions.cancelOrder());
  yield put(actions.clearSelection());
  yield put(actions.update());
}
