import * as actionTypes from '../constants';
import * as actions from '../actions';

describe('Orders Actions', () => {
  describe('bookticket', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: actionTypes.BOOK_TICKET,
      };

      expect(actions.bookTicket()).toEqual(expectedResult);
    });
  });

  describe('showSpinner', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: actionTypes.SHOW_SPINNER,
      };

      expect(actions.showSpinner()).toEqual(expectedResult);
    });
  });

  describe('hideSpinner', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: actionTypes.HIDE_SPINNER,
      };

      expect(actions.hideSpinner()).toEqual(expectedResult);
    });
  });

  describe('saveTickets', () => {
    it('should return the correct type and value', () => {
      const expectedResult = {
        type: actionTypes.SAVE_TICKETS,
        tickets: [],
      };

      expect(actions.saveTickets([])).toEqual(expectedResult);
    });
  });

  describe('cancelOrder', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: actionTypes.CANCEL_ORDER,
      };

      expect(actions.cancelOrder()).toEqual(expectedResult);
    });
  });

  describe('selectTicket', () => {
    it('should return the correct type and id', () => {
      const expectedResult = {
        type: actionTypes.SELECT_TICKET,
        ticketId: 1,
      };

      expect(actions.selectTicket(1)).toEqual(expectedResult);
    });
  });

  describe('fetchData', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: actionTypes.FETCH_DATA,
      };

      expect(actions.fetchData()).toEqual(expectedResult);
    });
  });

  describe('completeBooking', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: actionTypes.COMPLETE_BOOKING,
      };

      expect(actions.completeBooking()).toEqual(expectedResult);
    });
  });

  describe('clearSelection', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: actionTypes.CLEAR_SELECTION,
      };

      expect(actions.clearSelection()).toEqual(expectedResult);
    });
  });

  describe('update', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: actionTypes.UPDATE,
      };

      expect(actions.update()).toEqual(expectedResult);
    });
  });
});
