/**
 *
 * Auth
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectAuth from './selectors';
import reducer from './reducer';
import saga from './saga';
import * as actions from './actions';
import Button from '../../components/Button/index';
import Spinner from '../../components/Spinner/index';
import Input from '../../components/Input/index';
import './auth.scss';

export function Auth(props) {
  useInjectReducer({ key: 'auth', reducer });
  useInjectSaga({ key: 'auth', saga });

  const formElementsArray = [];
  for (let key in props.auth.controls) {
    if (!props.auth.isSignup && !(key === 'name')) {
      formElementsArray.push({
        id: key,
        config: props.auth.controls[key],
      });
    } else if (props.auth.isSignup) {
      formElementsArray.push({
        id: key,
        config: props.auth.controls[key],
      });
    }
  }

  let form = formElementsArray.map(formElement => (
    <Input
      key={formElement.id}
      elementType={formElement.config.elementType}
      elementConfig={formElement.config.elementConfig}
      value={formElement.config.value}
      invalid={!formElement.config.valid}
      shouldValidate={formElement.config.validation}
      touched={formElement.config.touched}
      changed={event => {
        event.persist();
        return props.inputChangeHandler(event, formElement.id);
      }}
    />
  ));

  let authRedirect = null;
  if (props.auth.authenticated) {
    authRedirect = <Redirect to="/" />;
  }

  let titleMessage = <h2>Login to start your journey</h2>;
  if (props.auth.isSignup) {
    titleMessage = <h2>Don't have an account? Sign up</h2>;
  }

  let disabled = true;
  let submitBtn = 'Disabled';
  if (props.auth.isSignup) {
    if (
      props.auth.controls.email.valid &&
      props.auth.controls.name.valid &&
      props.auth.controls.password.valid
    ) {
      disabled = false;
      submitBtn = 'Success';
    }
  } else {
    if (props.auth.controls.email.valid && props.auth.controls.password.valid) {
      disabled = false;
      submitBtn = 'Success';
    }
  }

  let error = null;
  if (!props.auth.loginToken) {
    if (props.auth.isSignup) {
      error = <h3 style={{ color: 'red' }}>Email already exists</h3>;
    } else {
      error = <h3 style={{ color: 'red' }}>Check email and password</h3>;
    }
  }
  if (props.auth.loading) {
    form = <Spinner />;
  }

  return (
    <div className={'Auth'}>
      {titleMessage}
      {authRedirect}
      <form onSubmit={props.submitHandler}>
        {form}
        <Button btnType={submitBtn} disable={disabled}>
          SUBMIT
        </Button>
      </form>
      <Button clicked={props.switchAuthModeHandler} btnType="Danger">
        SWITCH TO {props.auth.isSignup ? 'LOGIN' : 'SIGNUP'}
      </Button>
      <br />
      {error}
      <br />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  auth: makeSelectAuth(),
});

function mapDispatchToProps(dispatch) {
  return {
    inputChangeHandler: (event, controlName) =>
      dispatch(actions.inputChange(event, controlName)),
    submitHandler: event => dispatch(actions.submit(event)),
    switchAuthModeHandler: () => dispatch(actions.switchAuthMode()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Auth);
