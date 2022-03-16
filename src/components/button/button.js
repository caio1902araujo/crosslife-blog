import React from 'react';
import styles from './button.module.css';
import PropTypes from 'prop-types';

const Button = ({children, onClick}) => {

  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.any.isRequired, 
  onClick: PropTypes.func, 
};

export default Button