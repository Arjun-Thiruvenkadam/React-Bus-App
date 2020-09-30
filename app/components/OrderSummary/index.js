/**
 *
 * OrderSummary
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Button from '../Button/index';
import './orderSummary.scss';

const OrderSummary = props => {
  const ticketsId = props.tickets.sort((a, b) => a.ticketId - b.ticketId);
  const tickets = ticketsId.map(ticket => (
    <p key={ticket.ticketId}>{ticket.ticketId} </p>
  ));
  return (
    <div className="orderSummary">
      <h2>
        <FormattedMessage {...messages.header} />
      </h2>
      <h4>
        <FormattedMessage {...messages.headMessage} />
      </h4>
      <h4>
        <FormattedMessage {...messages.tickets} />
      </h4>
      {tickets}
      <h4>
        <FormattedMessage {...messages.checkout} />
      </h4>
      <Button clicked={props.cancelOrder} btnType="Danger">
        <FormattedMessage {...messages.cancel} />
      </Button>
      <Button clicked={props.completeOrder} btnType="Success">
        <FormattedMessage {...messages.continue} />
      </Button>
    </div>
  );
};

OrderSummary.propTypes = {
  completeOrder: PropTypes.func,
  cancelOrder: PropTypes.func,
  tickets: PropTypes.any,
};

export default OrderSummary;
