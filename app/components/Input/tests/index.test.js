import React from 'react';
import { render } from 'react-testing-library';
import Input from '../index';

describe('<Input />', () => {
  it('should render and match the snapshot for name', () => {
    const config = {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Name',
      },
      value: '',
      validation: {
        required: true,
        minLength: 3,
      },
      valid: false,
      touched: false,
    };
    const {
      container: { firstChild },
    } = render(
      <Input
        key={1}
        elementType={config.elementType}
        elementConfig={config.elementConfig}
        value={config.value}
        invalid={!config.valid}
        shouldValidate={config.validation}
        touched={config.touched}
        changed={() => {}}
      />,
    );
    expect(firstChild).toMatchSnapshot();
  });

  it('should render and match the snapshot for password', () => {
    const config = {
      elementType: 'input',
      elementConfig: {
        type: 'password',
        placeholder: 'Password',
      },
      value: '',
      validation: {
        required: true,
        minLength: 6,
      },
      valid: false,
      touched: false,
    };
    const {
      container: { firstChild },
    } = render(
      <Input
        key={1}
        elementType={config.elementType}
        elementConfig={config.elementConfig}
        value={config.value}
        invalid={!config.valid}
        shouldValidate={config.validation}
        touched={!config.touched}
        changed={() => {}}
      />,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
