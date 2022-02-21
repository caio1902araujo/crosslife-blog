import React from 'react';
import styles from './button.module.css';
import PropTypes from 'prop-types';

const Button = ({children, styleClass, onClick}) => {

  return (
    <button className={styles[styleClass]} onClick={onClick}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  styleClass: "buttonPrimary",
};

Button.propTypes = {
  children: PropTypes.any.isRequired, 
  styleClass: PropTypes.string, 
  onClick: PropTypes.func, 
};

export default Button