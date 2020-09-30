/*
 *
 * Auth reducer
 *
 */
import produce from 'immer';
import * as actionTypes from './constants';
import { checkValidity } from './utility';

export const initialState = {
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

/* eslint-disable default-case, no-param-reassign */
const authReducer = (state = initialState, action) =>
  produce(state, nextState => {
    switch (action.type) {
      case actionTypes.INPUT_CHANGE:
        try {
          nextState.controls[action.controlName].value =
            action.event.target.value;
          nextState.controls[action.controlName].valid = checkValidity(
            action.event.target.value,
            state.controls[action.controlName].validation,
          );
          nextState.controls[action.controlName].touched = true;
        } catch (e) {
          break;
        }
        break;
      case actionTypes.START_LOADING:
        nextState.loading = true;
        break;
      case actionTypes.STOP_LOADING:
        nextState.loading = false;
        break;
      case actionTypes.AUTH_SUCCESS:
        nextState.name = action.name;
        nextState.loginToken = action.token;
        nextState.authenticated = true;
        break;
      case actionTypes.SWITCH_AUTHMODE:
        nextState.isSignup = !state.isSignup;
        break;
      case actionTypes.LOGOUT:
        window.location.reload();
        break;
      case actionTypes.INVALID:
        nextState.loginToken = false;
        nextState.loading = false;
        break;
    }
  });

export default authReducer;
