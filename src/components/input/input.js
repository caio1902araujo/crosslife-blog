import React from 'react';
import styles from './input.module.css';
import PropTypes from 'prop-types';

const Input = ({typeStyle, id, name, type, value, onChange, placeholder, ...props}) => {
  const inputStyle = typeStyle === "primary" ? styles.inputPrimary : styles.inputSecondary;

  return (
    <div>
      <input className={inputStyle} 
        id={id}
        name={name}
        type={type} 
        value={value} 
        onChange={onChange} 
        placeholder={placeholder}
        {...props}
      />
    </div>
  )
};

Input.defaultProps = {
  typeStyle: "primary",
  type: "text",
};

Input.propTypes = {
  typeStyle: PropTypes.string, 
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  type: PropTypes.string, 
  error: PropTypes.string, 
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]), 
  onChange: PropTypes.func, 
  placeholder: PropTypes.string,
};

export default Input;