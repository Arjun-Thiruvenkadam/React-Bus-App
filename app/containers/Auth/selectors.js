import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAuthDomain = state => state.auth || initialState;

const makeSelectAuth = () =>
  createSelector(
    selectAuthDomain,
    substate => substate,
  );

const makeSelectAuthenticated = () =>
  createSelector(
    selectAuthDomain,
    substate => substate.authenticated,
  );

export { selectAuthDomain, makeSelectAuthenticated, makeSelectAuth };
