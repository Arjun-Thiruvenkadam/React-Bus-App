import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the orders state domain
 */

const selectOrdersDomain = state => state.orders || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Orders
 */

export const makeSelectOrdering = () =>
  createSelector(
    selectOrdersDomain,
    substate => substate.ordering,
  );

export const makeSelectSpinner = () =>
  createSelector(
    selectOrdersDomain,
    substate => substate.showSpinner,
  );

export const makeSelectTickets = () =>
  createSelector(
    selectOrdersDomain,
    substate => substate.tickets,
  );

export const makeSelectSelectedTickets = () =>
  createSelector(
    selectOrdersDomain,
    substate => substate.selectedTickets,
  );

export const makeSelectShouldUpdate = () =>
  createSelector(
    selectOrdersDomain,
    substate => substate.shouldUpdate,
  );
