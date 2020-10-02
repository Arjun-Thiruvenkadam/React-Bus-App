import { createSelector } from 'reselect';
import { initialState } from './reducer';

export const selectOrdersDomain = state => state.orders || initialState;

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
