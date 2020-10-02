import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { MemoryRouter } from 'react-router';
import HomePage from '../index';

describe('<HomePage />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <MemoryRouter>
        <IntlProvider locale="en">
          <HomePage />
        </IntlProvider>
      </MemoryRouter>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
