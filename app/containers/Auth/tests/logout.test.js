import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { browserHistory } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import Logout, { mapDispatchToProps } from '../logout';
import * as actions from '../actions';
import configureStore from '../../../configureStore';

describe('<Logout />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <MemoryRouter>
          <IntlProvider locale="en">
            <Logout />
          </IntlProvider>
        </MemoryRouter>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  describe('mapDispatchToProps', () => {
    describe('logoutHandler', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.logoutHandler).toBeDefined();
      });

      it('should dispatch logout when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.logoutHandler();
        expect(dispatch).toHaveBeenCalledWith(actions.logout());
      });
    });
  });
});
