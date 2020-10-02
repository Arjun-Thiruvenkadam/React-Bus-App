import produce from 'immer';
import ordersReducer from '../reducer';
import * as actions from '../actions';
import * as utility from '../utility';

/* eslint-disable default-case, no-param-reassign */
describe('ordersReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      tickets: [],
      ordering: false,
      selectedTickets: [],
      shouldUpdate: false,
      showSpinner: false,
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(ordersReducer(undefined, {})).toEqual(expectedResult);
  });

  it('BOOK_TICKET action', () => {
    const expectedResult = produce(state, draft => {
      draft.ordering = true;
    });
    expect(ordersReducer(state, actions.bookTicket())).toEqual(expectedResult);
  });

  it('CANCEL_ORDER action', () => {
    const expectedResult = produce(state, draft => {
      draft.ordering = false;
      draft.showSpinner = false;
    });
    expect(ordersReducer(state, actions.cancelOrder())).toEqual(expectedResult);
  });

  it('SELECT_TICKET action', () => {
    const expectedResult = produce(state, draft => {
      utility.selectTicket(1, state, draft);
    });
    expect(ordersReducer(state, actions.selectTicket(1))).toEqual(
      expectedResult,
    );
  });

  it('SHOW_SPINNER action', () => {
    const expectedResult = produce(state, draft => {
      draft.showSpinner = true;
    });
    expect(ordersReducer(state, actions.showSpinner())).toEqual(expectedResult);
  });

  it('HIDE_SPINNER action', () => {
    const expectedResult = produce(state, draft => {
      draft.showSpinner = false;
    });
    expect(ordersReducer(state, actions.hideSpinner())).toEqual(expectedResult);
  });

  it('SAVE_TICKETS action', () => {
    const expectedResult = produce(state, draft => {
      draft.tickets = [{ ticketId: 1 }];
    });
    expect(
      ordersReducer(state, actions.saveTickets([{ ticketId: 1 }])),
    ).toEqual(expectedResult);
  });

  it('CLEAR_SELECTION action', () => {
    const expectedResult = produce(state, draft => {
      draft.selectedTickets = [];
    });
    expect(ordersReducer(state, actions.clearSelection())).toEqual(
      expectedResult,
    );
  });

  it('UPDATE action', () => {
    const expectedResult = produce(state, draft => {
      draft.shouldUpdate = true;
    });
    expect(ordersReducer(state, actions.update())).toEqual(expectedResult);
  });
});
