import React from 'react';
import { render } from 'react-testing-library';
import Card from '../index';
import Safety from '../../../images/safety.png';

describe('<Card />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Card image={Safety} name="Safety">
        Testing...
      </Card>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
