import React from 'react';
import { render } from 'react-testing-library';
import Seat from '../index';

describe('<Seat />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<Seat status="open" id={1} />);
    expect(firstChild).toMatchSnapshot();
  });

  it('should render and match the snapshot with status closed', () => {
    const {
      container: { firstChild },
    } = render(<Seat status="closed" id={1} />);
    expect(firstChild).toMatchSnapshot();
  });

  it('should render and match the snapshot with status booking', () => {
    const {
      container: { firstChild },
    } = render(<Seat status="booking" id={1} />);
    expect(firstChild).toMatchSnapshot();
  });
});
