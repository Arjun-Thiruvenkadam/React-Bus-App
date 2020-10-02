import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { MemoryRouter } from 'react-router';
import CardsHolder from '../index';

describe('<CardsHolder />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <MemoryRouter>
        <IntlProvider locale="en">
          <CardsHolder />
        </IntlProvider>
      </MemoryRouter>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
