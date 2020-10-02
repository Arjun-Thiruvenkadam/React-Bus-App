import React from 'react';
import { render } from 'react-testing-library';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';
import { MemoryRouter } from 'react-router';
import { IntlProvider } from 'react-intl';
import Layout from '../index';
import configureStore from '../../../configureStore';

describe('<Layout />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <MemoryRouter>
            <Layout>Layout Container</Layout>
          </MemoryRouter>
        </IntlProvider>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
