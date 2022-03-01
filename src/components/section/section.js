import React from 'react';
import Article from '../article/article';
import FeedNews from '../feedNews/feedNews';
import styles from './section.module.css';

const Section = ({title, typeGridNews}) => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{title}</h1>
        <FeedNews />
      </div>
    </section>
  )
}

export default Section;