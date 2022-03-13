import React from 'react';
import { Link } from 'react-router-dom';
import styles from './article.module.css';
import PropTypes from 'prop-types';

const Article = ({title, author, date, category, typeArticle, number}) => {

  return (
    <article className={styles[typeArticle]}>
      <Link to='/' className={styles.link}></Link>
      { 
        typeArticle === "cardPrimary" ?
        <span className={styles.category}>{category}</span> :
        <span className={styles.number}>#00{number}</span> 
      }
      
      <h2 className={styles.titleLineCampLarge}>{title}</h2>
      <p>por <span className={styles.name}>{author}</span> há {date}</p>
    </article>
  )
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string,
  typeArticle: PropTypes.string.isRequired,
  number: PropTypes.number,
};

export default Article;