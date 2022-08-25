import React from 'react';
import PropTypes from 'prop-types';

import styles from './input.module.css';

const Input = ({id, name, type, value, onChange, placeholder, ...props}) => {
  return (
    <div>
      <input className={styles.input} 
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
  type: 'text',
};

Input.propTypes = {
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
