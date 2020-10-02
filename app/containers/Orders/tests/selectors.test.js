import * as selectors from '../selectors';

describe('selectOrders', () => {
  it('selectOrdersDomain', () => {
    const ordersState = {
      tickets: [],
      ordering: false,
      selectedTickets: [],
      shouldUpdate: false,
      showSpinner: false,
    };
    const mockedState = {
      orders: ordersState,
    };
    expect(selectors.selectOrdersDomain(mockedState)).toEqual(ordersState);
  });

  it('makeSelectOrdering', () => {
    const ordersState = {
      ordering: false,
    };
    const mockedState = {
      orders: ordersState,
    };
    expect(selectors.makeSelectOrdering()(mockedState)).toEqual(
      ordersState.ordering,
    );
  });

  it('makeSelectSpinner', () => {
    const ordersState = {
      showSpinner: false,
    };
    const mockedState = {
      orders: ordersState,
    };
    expect(selectors.makeSelectSpinner()(mockedState)).toEqual(
      ordersState.showSpinner,
    );
  });

  it('makeSelectTickets', () => {
    const ordersState = {
      tickets: [],
    };
    const mockedState = {
      orders: ordersState,
    };
    expect(selectors.makeSelectTickets()(mockedState)).toEqual(
      ordersState.tickets,
    );
  });

  it('makeSelectSelectedTickets', () => {
    const ordersState = {
      selectedTickets: [],
    };
    const mockedState = {
      orders: ordersState,
    };
    expect(selectors.makeSelectSelectedTickets()(mockedState)).toEqual(
      ordersState.selectedTickets,
    );
  });

  it('makeSelectShouldUpdate', () => {
    const ordersState = {
      shouldUpdate: false,
    };
    const mockedState = {
      orders: ordersState,
    };
    expect(selectors.makeSelectShouldUpdate()(mockedState)).toEqual(
      ordersState.shouldUpdate,
    );
  });
});
