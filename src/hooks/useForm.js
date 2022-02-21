import React from "react";
import PropTypes from 'prop-types';

const useForm = (isRequired=true) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState('');

  function validate(value){
    if(isRequired === false) return true;
    if(value.length === 0){
      setError('Preencha esse campo');
      return false;
    }
    else{
      setError(null);
      return true
    }
  }
  
  function onChange({target}){
    if (error){
      validate(target.value)
    }
    setValue(target.value);
  }

  return {
    value,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value)
  }
};

useForm.propTypes = {
  isRequired: PropTypes.bool, 
};


export default useForm