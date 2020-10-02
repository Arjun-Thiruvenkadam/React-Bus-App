import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';
import { MemoryRouter } from 'react-router';
import { create } from 'react-test-renderer';
import ConnectedOrders, { Orders, mapDispatchToProps } from '../index';
import configureStore from '../../../configureStore';
import * as actions from '../actions';
import Seat from '../../../components/Seat/index';

describe('<Orders />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <MemoryRouter>
          <IntlProvider locale="en">
            <ConnectedOrders />
          </IntlProvider>
        </MemoryRouter>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  it('should render and match the snapshot with spinner', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <MemoryRouter>
          <IntlProvider locale="en">
            <Orders
              showSpinner
              tickets={[{ ticketId: 1, status: 'open' }]}
              selectedTickets={[{ ticketId: 1, status: 'open' }]}
              ordering={false}
              shouldUpdate={false}
              authenticated
              fetchDataHandler={() => {}}
            />
          </IntlProvider>
        </MemoryRouter>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  it('<Seat> props.onClick is called on click ', () => {
    const fn = jest.fn();
    const tree = create(
      <IntlProvider locale="en">
        <Orders
          showSpinner={false}
          tickets={[{ ticketId: 1, status: 'open' }]}
          selectedTickets={[{ ticketId: 1, status: 'open' }]}
          ordering={false}
          shouldUpdate={false}
          authenticated
          fetchDataHandler={() => {}}
          selectTicketHandler={fn}
        />
      </IntlProvider>,
    );
    const SeatComponent = tree.root.findByType(Seat);
    SeatComponent.props.clicked();
    expect(fn.mock.calls.length).toBe(1);
  });

  describe('mapDispatchToProps', () => {
    describe('bookHandler', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.bookHandler).toBeDefined();
      });

      it('should dispatch bookTicket when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.bookHandler();
        expect(dispatch).toHaveBeenCalledWith(actions.bookTicket());
      });
    });

    describe('selectTicketHandler', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.selectTicketHandler).toBeDefined();
      });

      it('should dispatch selectTicket when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const data = 1;
        result.selectTicketHandler(data);
        expect(dispatch).toHaveBeenCalledWith(actions.selectTicket(data));
      });
    });

    describe('cancelOrderHandler', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.cancelOrderHandler).toBeDefined();
      });

      it('should dispatch cancelOrder when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.cancelOrderHandler();
        expect(dispatch).toHaveBeenCalledWith(actions.cancelOrder());
      });
    });

    describe('completeBookingHandler', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.completeBookingHandler).toBeDefined();
      });

      it('should dispatch completeBooking when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.completeBookingHandler();
        expect(dispatch).toHaveBeenCalledWith(actions.completeBooking());
      });
    });
  });
});
