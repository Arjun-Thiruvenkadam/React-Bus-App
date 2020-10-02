import React from 'react';
import { render } from 'react-testing-library';
import Backdrop from '../index';

describe('<Backdrop />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<Backdrop show clicked={null} />);
    expect(firstChild).toMatchSnapshot();
  });

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<Backdrop show={false} clicked={null} />);
    expect(firstChild).toMatchSnapshot();
  });
});
