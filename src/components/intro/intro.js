import React from 'react';
import styles from './intro.module.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const typesIntroStyle = {
  primary: {
    introStyle: styles.introPrimary,
    titleStyle: styles.titleWhite,
    descriptionStyle: styles.descriptionWhite,
  },
  secondary: {
    introStyle: styles.introSecondary,
    titleStyle: styles.title,
    descriptionStyle: styles.description,
  }
}

const Intro = ({title, description, textButton, typeIntroStyle}) => {
  const {introStyle, titleStyle, descriptionStyle} = typesIntroStyle[typeIntroStyle];

  return (
    <section className={introStyle}>
      <div className={styles.wrapper}>
        <h1 className={titleStyle}>{title}</h1>
        <p className={descriptionStyle}>{description}</p>
        {textButton && <Link to="#" className={styles.callToAction}>{textButton}</Link>}
      </div>
    </section>
  )
}

Intro.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  textButton: PropTypes.string,
  typeIntroStyle: PropTypes.string,
};

export default Intro