import React from 'react';
import { render } from 'react-testing-library';
import { MemoryRouter } from 'react-router';
import NavigationItem from '../index';

describe('<NavigationItem />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <MemoryRouter>
        <NavigationItem link="/">Link</NavigationItem>
      </MemoryRouter>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
