import {
  makeSelectAuth,
  makeSelectAuthenticated,
  selectAuthDomain,
} from '../selectors';

describe('selectAuth', () => {
  it('makeSelectAuthenticated', () => {
    const authenticated = makeSelectAuthenticated();
    const authState = {
      authenticated: true,
    };
    const mockedState = {
      auth: authState,
    };
    expect(authenticated(mockedState)).toEqual(authState.authenticated);
  });

  it('makeSelectAuth', () => {
    const auth = makeSelectAuth();
    const authState = {
      authenticated: true,
    };
    const mockedState = {
      auth: authState,
    };
    expect(auth(mockedState)).toEqual(authState);
  });

  it('selectAuthDomain', () => {
    const authState = {
      authenticated: true,
    };
    const mockedState = {
      auth: authState,
    };
    expect(selectAuthDomain(mockedState)).toEqual(authState);
  });
});
