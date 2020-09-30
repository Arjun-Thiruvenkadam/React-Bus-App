/**
 *
 * Orders
 *
 */

import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectAuthenticated } from '../Auth/selectors';
import * as selectors from './selectors';
import reducer from './reducer';
import saga from './saga';
import * as actions from './actions';
import Modal from '../../components/Modal/index';
import Seat from '../../components/Seat/index';
import Spinner from '../../components/Spinner/index';
import OrderSummary from '../../components/OrderSummary/index';
import './orders.scss';

export function Orders(props) {
  useInjectReducer({ key: 'orders', reducer });
  useInjectSaga({ key: 'orders', saga });
  useEffect(() => {
    const fetch = () => props.fetchDataHandler();
    fetch();
  }, []);

  let order = props.tickets.map(ticket => (
    <Seat
      id={ticket.ticketId}
      key={ticket.ticketId}
      status={ticket.status}
      clicked={() => props.selectTicketHandler(ticket.ticketId)}
    />
  ));

  if (props.showSpinner) {
    order = <Spinner />;
  }

  if(!props.authenticated){
    order = 'Please Login'
  }

  let btnClass = 'hidden';
  if (props.selectedTickets.length > 0) {
    btnClass = 'bookBtn';
  }

  let orderSummary = (
    <OrderSummary
      tickets={props.selectedTickets}
      cancelOrder={props.cancelOrderHandler}
      completeOrder={props.completeBookingHandler}
    />
  );

  if (props.showSpinner) {
    orderSummary = <Spinner />;
  }

  return (
    <Fragment>
      <Modal show={props.ordering} modalClosed={props.cancelOrderHandler}>
        {orderSummary}
      </Modal>
      <div className="container">
        <h1 style={{ color: '#0f3460' }}>Book Tickets</h1>
        {order}
      </div>
      <br />
      <br />
      <button className={btnClass} onClick={props.bookHandler}>
        Book
      </button>
    </Fragment>
  );
}

const mapStateToProps = createStructuredSelector({
  ordering: selectors.makeSelectOrdering(),
  showSpinner: selectors.makeSelectSpinner(),
  tickets: selectors.makeSelectTickets(),
  shouldUpdate: selectors.makeSelectShouldUpdate(),
  selectedTickets: selectors.makeSelectSelectedTickets(),
  authenticated: makeSelectAuthenticated(),
});

function mapDispatchToProps(dispatch) {
  return {
    bookHandler: () => dispatch(actions.bookTicket()),
    selectTicketHandler: ticketId => dispatch(actions.selectTicket(ticketId)),
    cancelOrderHandler: () => dispatch(actions.cancelOrder()),
    fetchDataHandler: () => dispatch(actions.fetchData()),
    completeBookingHandler: () => dispatch(actions.completeBooking()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Orders);
