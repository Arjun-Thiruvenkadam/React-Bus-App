import { takeEvery, put, select } from 'redux-saga/effects';
import * as actionTypes from './constants';
import * as actions from './actions';
import makeSelectAuth from './selectors';
import { getResponse } from './utility';

// Individual exports for testing
export default function* authSaga() {
  // See example in containers/HomePage/saga.js
  yield takeEvery(actionTypes.SUBMIT, submitSaga);
}

export function* submitSaga(action) {
  action.event.preventDefault();
  yield put(actions.startLoading());
  const state = yield select(makeSelectAuth());
  const response = yield getResponse(state);
  if (response.data === 'Check email and password') {
    yield put(actions.invalid());
  } else {
    localStorage.setItem('userId', response.data.token);
    yield put(actions.authSuccess(response.data.name, response.data.token));
  }
}
