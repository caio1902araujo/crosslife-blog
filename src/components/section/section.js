import React from 'react';
import FeedNews from '../feedNews/feedNews';
import styles from './section.module.css';
import PropTypes from 'prop-types';

const Section = ({title, styleSection, typeGridNews}) => {
  return (
    <section className={styles[styleSection]}>
      <div className={styles.wrapper}>
        {title && <h1 className={styles.title}>{title}</h1>}
        <FeedNews typeGridNews={typeGridNews}/>
      </div>
    </section>
  )
}

Section.propTypes = {
  title: PropTypes.string,
  styleSection: PropTypes.string.isRequired,
  typeGridNews: PropTypes.string.isRequired,
};

export default Section;