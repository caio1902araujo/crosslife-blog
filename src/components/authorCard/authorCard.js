import React from 'react';
import styles from './authorCard.module.css';
import PropTypes from 'prop-types';
import LinkOverlay from '../linkOverlay/linkOverlay';

const AuthorCard = ({author, description}) => {

  return (
    <section className={styles.card}>
      <LinkOverlay url="/"></LinkOverlay>
      <div className={styles.image}>
        
      </div>

      <div className={styles.info}>
        <h3 className={styles.title}>{author}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </section>
  )
};

AuthorCard.propTypes = {
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default AuthorCard;