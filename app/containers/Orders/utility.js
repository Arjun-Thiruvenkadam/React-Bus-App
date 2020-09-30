/* eslint-disable no-param-reassign */
export const selectTicket = (ticketId, state, nextState) => {
  const tickets = [...state.tickets];
  const selectedTickets = [...state.selectedTickets];
  tickets.forEach(ticket => {
    if (ticket.ticketId === ticketId) {
      if (ticket.status === 'open') {
        ticket.status = 'booking';
        selectedTickets.push(ticket);
      } else {
        ticket.status = 'open';
        selectedTickets.splice(selectedTickets.indexOf(ticket), 1);
      }
    }
  });
  nextState.tickets = tickets;
  nextState.selectedTickets = selectedTickets;
};

export const createTicket = (ticket, userId) => {
  const payload = {
    ticketId: ticket.ticketId,
    personId: userId,
  };
  return payload;
};

export const updateTickets = (tickets, response, userId) => {
  response.forEach(element => {
    if (element.result === 'Success') {
      const result = tickets.find(
        ticket => ticket.ticketId === element.ticketId,
      );
      if (result) {
        result.status = 'closed';
        result.personId = userId;
      }
    }
  });
  return tickets;
};
