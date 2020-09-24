/**
 *
 * Input
 *
 */

import React from 'react';
import InputContainer from './inputContainer';
import StyledLabel from './styledLabel';
import StyledInput from './input';
import StyledTextArea from './textArea';
import StyledSelect from './select'; 

const Input = props => {
  let inputElement = null;
  const inputClasses = [classes.InputElement];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid);
  }

  switch (props.elementType) {
    case 'input':
      inputElement = (
        <StyledInput
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case 'textarea':
      inputElement = (
        <StyledTextArea
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case 'select':
      inputElement = (
        <StyledSelect
          className={inputClasses.join(' ')}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </StyledSelect>
      );
      break;
    default:
      inputElement = (
        <StyledInput
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }

  return (
    <InputContainer>
      <StyledLabel>{props.label}</StyledLabel>
      {inputElement}
    </InputContainer>
  );
};

export default Input;
