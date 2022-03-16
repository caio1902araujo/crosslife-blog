import React from 'react';
import styles from './input.module.css';
import PropTypes from 'prop-types';

const Input = ({classInput, id, name, type, value, onChange, placeholder}) => {
  return (
    <div>
      <input className={styles[classInput]} 
        id={id}
        name={name}
        type={type} 
        value={value} 
        onChange={onChange} 
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