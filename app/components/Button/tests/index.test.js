import React from 'react';
import { render } from 'react-testing-library';
import Button from '../index';

describe('<Button />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<Button btnType="Success">Click</Button>);
    expect(firstChild).toMatchSnapshot();
  });
});
