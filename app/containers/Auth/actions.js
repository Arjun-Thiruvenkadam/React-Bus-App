/*
 *
 * Auth actions
 *
 */

import * as actionTypes from './constants';

export function inputChange(event, controlName) {
  return {
    type: actionTypes.INPUT_CHANGE,
    event,
    controlName,
  };
}

export function submit(event) {
  return {
    type: actionTypes.SUBMIT,
    event,
  };
}

export function startLoading() {
  return {
    type: actionTypes.START_LOADING,
  };
}

export function stopLoading() {
  return {
    type: actionTypes.STOP_LOADING,
  };
}

export function authSuccess(name, token) {
  return {
    type: actionTypes.AUTH_SUCCESS,
    name,
    token,
  };
}

export function switchAuthMode(){
  return{
    type: actionTypes.SWITCH_AUTHMODE,
  }
}

export function logout(){
  return{
    type: actionTypes.LOGOUT,
  }
}

export function invalid(){
  return{
    type: actionTypes.INVALID,
  }
}
