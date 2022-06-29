import React from 'react';
import styles from './intro.module.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const typesIntroStyle = {
  primary: {
    containerStyle: styles.containerPrimary,
    titleStyle: styles.titlePrimary,
    descriptionStyle: styles.descriptionPrimary,
  },
  secondary: {
    containerStyle: styles.containerSecondary,
    titleStyle: styles.titleSecondary,
    descriptionStyle: styles.descriptionSecondary,
  }
}

const Intro = ({title, description, textButton, typeStyle, urlImage}) => {
  const {containerStyle, titleStyle, descriptionStyle} = typesIntroStyle[typeStyle];

  return (
    <section className={containerStyle}>
      <div className={styles.wrapper}>
        {
          urlImage &&
          <div className={styles.image}>

          </div>
        }
        
        <h1 className={titleStyle}>{title}</h1>
        <p className={descriptionStyle}>{description}</p>
        {
          typeStyle === "primary" ? 
          <Link to="#" className={styles.callToAction}>{textButton}</Link>:
          <p className={styles.newsStats}> 12 artigos </p>
        }
      </div>
    </section>
  )
}

Intro.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  textButton: PropTypes.string,
  typeStyle: PropTypes.string,
  urlImage: PropTypes.string,
};

export default Intro