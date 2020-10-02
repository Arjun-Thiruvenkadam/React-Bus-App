/**
 *
 * Input
 *
 */
/* eslint-disable react/prop-types */

import React from 'react';
import './input.scss';

const Input = props => {
  let inputElement = null;
  const inputClasses = ['InputElement'];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push('Invalid');
  }

  inputElement = (
    <input
      className={inputClasses.join(' ')}
      {...props.elementConfig}
      value={props.value}
      onChange={props.changed}
    />
  );

  return (
    <div className="Input">
      <label className="Label">{props.label}</label>
      {inputElement}
    </div>
  );
};

export default Input;
