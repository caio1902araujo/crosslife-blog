import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as NotFound } from '../../assets/notFound.svg';
import { ReactComponent as Error } from '../../assets/error.svg';

import styles from './warning.module.css';

const svgs = {
  notFound: <NotFound />,
  error: <Error />,
};

const Warning = ({title, description, svg, isFull}) => {
  const styleClassContainer = isFull === true ? styles.container : '';

  return (
    <div className={styleClassContainer}>
      <div className={styles.wrapper}>
        <div className={styles.image}>
          {svgs[svg]}
        </div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}

Warning.defaultProps = {
  isFull: false,
};

Warning.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isFull: PropTypes.bool, 
  svg: PropTypes.string,
};

export default Warning;
