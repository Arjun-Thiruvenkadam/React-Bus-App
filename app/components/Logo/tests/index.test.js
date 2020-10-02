import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import Logo from '../index';

describe('<Logo />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="en">
        <Logo />
      </IntlProvider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
