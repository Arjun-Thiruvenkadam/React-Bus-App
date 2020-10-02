import React from 'react';
import { render } from 'react-testing-library';
import Modal from '../index';

describe('<Modal />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<Modal show modalClosed={null} />);
    expect(firstChild).toMatchSnapshot();
  });

  it('should render and match the snapshot with values hidden', () => {
    const {
      container: { firstChild },
    } = render(<Modal show={false} modalClosed={null} />);
    expect(firstChild).toMatchSnapshot();
  });
});
