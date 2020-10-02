import * as utility from '../utility';

describe('Utility tests on Orders Component', () => {
  it('selectTicket', () => {
    const state = {
      tickets: [
        {
          ticketId: 1,
          status: 'open',
        },
      ],
      selectedTickets: [],
    };
    const nextState = {
      tickets: [
        {
          ticketId: 1,
          status: 'open',
        },
      ],
      selectedTickets: [],
    };
    utility.selectTicket(1, state, nextState);
    expect(
      nextState.selectedTickets.find(ticket => ticket.ticketId === 1),
    ).toBeDefined();
  });

  it('selectTicket', () => {
    const state = {
      tickets: [
        {
          ticketId: 1,
          status: 'booking',
        },
      ],
      selectedTickets: [
        {
          ticketId: 1,
          status: 'booking',
        },
      ],
    };
    const nextState = {
      tickets: [
        {
          ticketId: 1,
          status: 'booking',
        },
      ],
      selectedTickets: [
        {
          ticketId: 1,
          status: 'booking',
        },
      ],
    };
    utility.selectTicket(1, state, nextState);

    expect(
      nextState.selectedTickets.find(ticket => ticket.ticketId === 1),
    ).toBeUndefined();
  });

  it('createTicket', () => {
    const payload = {
      ticketId: 1,
      personId: '123',
    };
    expect(utility.createTicket({ ticketId: 1 }, payload.personId)).toEqual(
      payload,
    );
  });
});
