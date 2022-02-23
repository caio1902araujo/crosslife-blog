import React from 'react';
import styles from './intro.module.css';
import { Link } from 'react-router-dom';

const Intro = ({title, description, textButton}) => {
  return (
    <section className={styles.intro}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        {textButton && <Link to="#" className={styles.callToAction}>{textButton}</Link>}
      </div>
    </section>
  )
}

export default Intro