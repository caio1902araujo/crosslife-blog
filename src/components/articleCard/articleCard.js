import React from 'react';
import { Link } from 'react-router-dom';
import styles from './articleCard.module.css';
import PropTypes from 'prop-types';

const ArticleCard = ({title, author, date, category, typeStyle, number}) => {

  const articleStyle = typeStyle === "primary" ? styles.cardPrimary : styles.cardSecondary;

  return (
    <article className={articleStyle}>
      <Link to='/' className={styles.cardLink}></Link>
      { 
        typeStyle === "primary" ?
        <span className={styles.category}>{category}</span> :
        <span className={styles.number}>#00{number}</span> 
      }
      
      <h2 className={styles.titleLineCampLarge}>{title}</h2>
      <p>por <span className={styles.name}>{author}</span> há {date}</p>
    </article>
  )
};

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string,
  typeStyle: PropTypes.string.isRequired,
  number: PropTypes.number,
};

export default ArticleCard;