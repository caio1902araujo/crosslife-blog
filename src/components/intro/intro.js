import React from 'react';
import PropTypes from 'prop-types';

import Image from '../image/image';

import styles from './intro.module.css';

const typesIntroStyle = {
  primary: {
    containerStyle: styles.containerPrimary,
    titleStyle: styles.titlePrimary,
    descriptionStyle: styles.descriptionWhite,
  },
  secondary: {
    containerStyle: styles.containerSecondary,
    titleStyle: styles.titleSecondary,
    descriptionStyle: styles.description,
  }
}

const Intro = ({image, title, description, textButton, typeIntroStyle}) => {
  const {containerStyle, titleStyle, descriptionStyle} = typesIntroStyle[typeIntroStyle];

  return (
    <section className={containerStyle}>
      <div className={styles.wrapper}>
        {
          image &&
          <div className={styles.image}>
            <Image url={image.url} namespace={image.namespace}/>
          </div>
        }
        <h1 className={titleStyle}>{title}</h1>
        <p className={descriptionStyle}>{description}</p>
        {textButton && <a href='#mostRead' className={styles.callToAction}>{textButton}</a>}
      </div>
    </section>
  )
}

Intro.defaultProps = {
  typeIntroStyle: 'primary',
};

Intro.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  typeIntroStyle: PropTypes.oneOf(['primary', 'secondary']),
  textButton: PropTypes.string,
  image: PropTypes.objectOf(PropTypes.string),
};

export default Intro;
