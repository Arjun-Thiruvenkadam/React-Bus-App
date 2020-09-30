import axios from 'axios';

export const checkValidity = (value, rules) => {
  let isValid = true;
  if (!rules) {
    return true;
  }

  if (rules.required) {
    isValid = value.trim() !== '' && isValid;
  }

  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
  }

  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid;
  }

  if (rules.isEmail) {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    isValid = pattern.test(value) && isValid;
  }

  if (rules.isNumeric) {
    const pattern = /^\d+$/;
    isValid = pattern.test(value) && isValid;
  }

  return isValid;
};

export const makeLoginPayload = state => {
  const payload = {
    email: state.controls.email.value,
    password: state.controls.password.value,
  };
  return payload;
};

export const makeSignupPayload = state => {
  const payload = {
    email: state.controls.email.value,
    password: state.controls.password.value,
    name: state.controls.name.value,
  };
  return payload;
};

export const getResponse = async(state)=>{
  let response;
  if (state.isSignup) {
    const authPayLoad = makeSignupPayload(state);
    response = await axios.post(
      'https://nestjs-bus-api.herokuapp.com/auth/signup',
      authPayLoad,
    );
  } else {
    const authPayLoad = makeLoginPayload(state);
    response = await axios.post(
      'https://nestjs-bus-api.herokuapp.com/auth/login',
      authPayLoad,
    );
  }
  return response;
}
