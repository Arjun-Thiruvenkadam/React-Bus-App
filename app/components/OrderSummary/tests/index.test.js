import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import OrderSummary from '../index';

describe('<OrderSummary />', () => {
  it('should render and match the snapshot', () => {
    const tickets = [
      {
        _id: '5f435a78fe45e2e4d6c35143',
        ticketId: 1,
        status: 'open',
        personId: null,
        __v: 0,
      },
      {
        _id: '5f435a78fe45e2e4d6c35144',
        ticketId: 2,
        status: 'open',
        personId: null,
        __v: 0,
      },
    ];
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="en">
        <OrderSummary tickets={tickets} />
      </IntlProvider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
