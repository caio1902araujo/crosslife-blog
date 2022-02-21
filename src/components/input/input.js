import React from 'react';
import styles from './input.module.css';
import PropTypes from 'prop-types';

const Input = ({classInput, id, type, error, value, onChange, onBlur, placeholder}) => {
  return (
    <div>
      <input className={styles[classInput]} 
        id={id} 
        type={type} 
        value={value} 
        onChange={onChange} 
        onBlur={onBlur}
        placeholder={placeholder}
      />
    </div>
  )
};

Input.defaultProps = {
  classInput: "input",
  type: "text",
};

Input.propTypes = {
  classInput: PropTypes.string, 
  id: PropTypes.string.isRequired, 
  type: PropTypes.string, 
  error: PropTypes.string, 
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]), 
  onChange: PropTypes.func, 
  onBlur: PropTypes.func, 
  placeholder: PropTypes.string,
};

export default Input;