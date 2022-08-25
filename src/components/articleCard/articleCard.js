import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import timeInterval from '../../utils/timeInterval';

import styles from './articleCard.module.css';

const ArticleCard = ({title, nameAuthor, usernameAuthor, date, category, typeCardStyle, number}) => {
  const articleStyle = styles[typeCardStyle];
  const titleEncode = encodeURIComponent(title)

  return (
    <article className={articleStyle}>
      <Link to={`/${titleEncode}`} className={styles.cardLink}></Link>
      {category && <Link to={`/categoria/${category}`} className={styles.category}>{category}</Link>} 
      {number && <span className={styles.number}>#00{number}</span>} 
      
      <h2 className={styles.titleLineCampLarge}>{title}</h2>
      <p>por <Link to={`/autor/${usernameAuthor}`} className={styles.name}>{nameAuthor}</Link> {timeInterval(date)} </p>
    </article>
  )
};

ArticleCard.defaultProps = {
  typeCardStyle: 'cardPrimary',
};

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  nameAuthor: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  usernameAuthor: PropTypes.string.isRequired,
  category: PropTypes.string,
  typeCardStyle: PropTypes.oneOf(['cardPrimary', 'cardSecondary']),
  number: PropTypes.number,
};

export default ArticleCard;
