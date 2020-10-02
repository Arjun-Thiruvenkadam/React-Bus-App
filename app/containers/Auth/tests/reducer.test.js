import produce from 'immer';
import sinon from 'sinon';
import authReducer from '../reducer';
import * as actions from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('authReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      controls: {
        name: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Name',
          },
          value: '',
          validation: {
            required: true,
            minLength: 3,
          },
          valid: false,
          touched: false,
        },
        email: {
          elementType: 'input',
          elementConfig: {
            type: 'email',
            placeholder: 'Mail Address',
          },
          value: '',
          validation: {
            required: true,
            isEmail: true,
          },
          valid: false,
          touched: false,
        },
        password: {
          elementType: 'input',
          elementConfig: {
            type: 'password',
            placeholder: 'Password',
          },
          value: '',
          validation: {
            required: true,
            minLength: 6,
          },
          valid: false,
          touched: false,
        },
      },
      isSignup: false,
      loginToken: true,
      userId: '',
      loading: false,
      authenticated: false,
    };
  });
  it('should return the initial state', () => {
    const expectedResult = state;
    expect(authReducer(undefined, {})).toEqual(expectedResult);
  });

  it('INPUT_CHANGE action', () => {
    const expectedResult = produce(state, draft => {
      draft.controls.name.value = 'testName';
      draft.controls.name.valid = true;
      draft.controls.name.touched = true;
    });
    const event = { target: { value: 'testName' } };
    expect(authReducer(state, actions.inputChange(event, 'name'))).toEqual(
      expectedResult,
    );
  });

  it('INPUT_CHANGE action for exception', () => {
    const expectedResult = state;
    const event = undefined;
    expect(authReducer(state, actions.inputChange(event, 'name'))).toEqual(
      expectedResult,
    );
  });

  it('START_LOADING action', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = true;
    });
    expect(authReducer(state, actions.startLoading())).toEqual(expectedResult);
  });

  it('STOP_LOADING action', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = false;
    });
    expect(authReducer(state, actions.stopLoading())).toEqual(expectedResult);
  });

  it('AUTH_SUCCESS action', () => {
    const expectedResult = produce(state, draft => {
      draft.name = 'testData';
      draft.loginToken = '123';
      draft.authenticated = true;
    });
    expect(authReducer(state, actions.authSuccess('testData', '123'))).toEqual(
      expectedResult,
    );
  });

  it('SWITCH_AUTHMODE action', () => {
    const expectedResult = produce(state, draft => {
      draft.isSignup = !state.isSignup;
    });
    expect(authReducer(state, actions.switchAuthMode())).toEqual(
      expectedResult,
    );
  });

  it('LOGOUT action', () => {
    const expectedResult = state;
    sinon.stub(window.location, 'reload');
    expect(authReducer(state, actions.logout())).toEqual(expectedResult);
  });

  it('INVALID action', () => {
    const expectedResult = produce(state, draft => {
      draft.loginToken = false;
      draft.loading = false;
    });
    expect(authReducer(state, actions.invalid())).toEqual(expectedResult);
  });
});
