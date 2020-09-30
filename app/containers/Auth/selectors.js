import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the auth state domain
 */

const selectAuthDomain = state => state.auth || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Auth
 */

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

export default makeSelectAuth;
export { selectAuthDomain, makeSelectAuthenticated };
