import * as actionTypes from '../constants';
import * as actions from '../actions';

describe('Auth Actions', () => {
  describe('inputChange', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: actionTypes.INPUT_CHANGE,
        event: 'change',
        controlName: 'input',
      };

      expect(actions.inputChange('change', 'input')).toEqual(expectedResult);
    });
  });

  describe('submit', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: actionTypes.SUBMIT,
        event: 'change',
      };

      expect(actions.submit('change')).toEqual(expectedResult);
    });
  });

  describe('startLoading', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: actionTypes.START_LOADING,
      };

      expect(actions.startLoading()).toEqual(expectedResult);
    });
  });

  describe('stopLoading', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: actionTypes.STOP_LOADING,
      };

      expect(actions.stopLoading()).toEqual(expectedResult);
    });
  });

  describe('authSuccess', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: actionTypes.AUTH_SUCCESS,
        name: 'aju',
        token: '123',
      };

      expect(actions.authSuccess('aju', '123')).toEqual(expectedResult);
    });
  });

  describe('switchAuthMode', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: actionTypes.SWITCH_AUTHMODE,
      };

      expect(actions.switchAuthMode()).toEqual(expectedResult);
    });
  });

  describe('logout', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: actionTypes.LOGOUT,
      };

      expect(actions.logout()).toEqual(expectedResult);
    });
  });

  describe('invalid', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: actionTypes.INVALID,
      };

      expect(actions.invalid()).toEqual(expectedResult);
    });
  });
});
