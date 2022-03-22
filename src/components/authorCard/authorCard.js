import React from 'react';
import { Link } from 'react-router-dom';
import styles from './authorCard.module.css';
import PropTypes from 'prop-types';

const AuthorCard = ({author, description}) => {

  return (
    <section className={styles.card}>
      <Link to='/' className={styles.cardLink}></Link>
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