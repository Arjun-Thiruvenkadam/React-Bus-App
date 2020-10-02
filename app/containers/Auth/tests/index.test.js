import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { browserHistory } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import ConnectedAuth, { mapDispatchToProps, Auth } from '../index';
import * as actions from '../actions';
import configureStore from '../../../configureStore';

describe('<Auth />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <ConnectedAuth />
        </IntlProvider>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  it('should render and match the snapshot with spinner', () => {
    const auth = {
      controls: {
        name: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Name',
          },
          value: 'data',
          validation: {
            required: true,
            minLength: 3,
          },
          valid: true,
          touched: true,
        },
        email: {
          elementType: 'input',
          elementConfig: {
            type: 'email',
            placeholder: 'Mail Address',
          },
          value: 'test@gmail.com',
          validation: {
            required: true,
            isEmail: true,
          },
          valid: true,
          touched: true,
        },
        password: {
          elementType: 'input',
          elementConfig: {
            type: 'password',
            placeholder: 'Password',
          },
          value: 'password',
          validation: {
            required: true,
            minLength: 6,
          },
          valid: true,
          touched: true,
        },
      },
      isSignup: true,
      loginToken: false,
      userId: '',
      loading: true,
      authenticated: false,
    };
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <Auth auth={auth} />
        </IntlProvider>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  it('should render and match the snapshot with login', () => {
    const auth = {
      controls: {
        name: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Name',
          },
          value: 'data',
          validation: {
            required: true,
            minLength: 3,
          },
          valid: true,
          touched: true,
        },
        email: {
          elementType: 'input',
          elementConfig: {
            type: 'email',
            placeholder: 'Mail Address',
          },
          value: 'test@gmail.com',
          validation: {
            required: true,
            isEmail: true,
          },
          valid: true,
          touched: true,
        },
        password: {
          elementType: 'input',
          elementConfig: {
            type: 'password',
            placeholder: 'Password',
          },
          value: 'password',
          validation: {
            required: true,
            minLength: 6,
          },
          valid: true,
          touched: true,
        },
      },
      isSignup: false,
      loginToken: false,
      userId: '',
      loading: true,
      authenticated: true,
    };
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <MemoryRouter>
          <IntlProvider locale="en">
            <Auth auth={auth} />
          </IntlProvider>
        </MemoryRouter>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  describe('mapDispatchToProps', () => {
    describe('inputChangeHandler', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.inputChangeHandler).toBeDefined();
      });

      it('should dispatch inputChange when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const data = 'testing';
        const controlName = 'name';
        result.inputChangeHandler(data, controlName);
        expect(dispatch).toHaveBeenCalledWith(
          actions.inputChange(data, controlName),
        );
      });
    });

    describe('submitHandler', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.submitHandler).toBeDefined();
      });

      it('should dispatch submit when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const data = 'testing';
        result.submitHandler(data);
        expect(dispatch).toHaveBeenCalledWith(actions.submit(data));
      });
    });

    describe('switchAuthModeHandler', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.switchAuthModeHandler).toBeDefined();
      });

      it('should dispatch switchAuthMode when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.switchAuthModeHandler();
        expect(dispatch).toHaveBeenCalledWith(actions.switchAuthMode());
      });
    });
  });
});
