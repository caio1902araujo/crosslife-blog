import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Image from '../image/image';

import styles from './authorCard.module.css';

const AuthorCard = ({name, username, description, avatarUrl, avatar}) => {

  return (
    <section className={styles.card}>
      <Link to={`/autor/${username}`} className={styles.cardLink}></Link>

      <div className={styles.image}>
        <Image url={avatarUrl} namespace={avatar}/>
      </div>

      <div className={styles.info}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </section>
  )
};

AuthorCard.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
};

export default AuthorCard;
