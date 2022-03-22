import React from 'react';
import FeedNews from '../feedNews/feedNews';
import styles from './section.module.css';
import PropTypes from 'prop-types';

const typesSectionStyle = {
  primary: {
    containerStyle: styles.container,
    titleStyle: styles.title,
  },
  secondary: {
    containerStyle: styles.containerTopBorder,
    titleStyle: styles.titleGreen,
  }
}

const Section = ({title, typeStyle, typeGridNews}) => {
  const { containerStyle, titleStyle } = typesSectionStyle[typeStyle];

  return (
    <section className={containerStyle}>
      <div className={styles.wrapper}>
        {title && <h1 className={titleStyle}>{title}</h1>}
        <FeedNews typeGridNews={typeGridNews}/>
      </div>
    </section>
  )
}

Section.propTypes = {
  title: PropTypes.string,
  typeStyle: PropTypes.string.isRequired,
  typeGridNews: PropTypes.string.isRequired,
};

export default Section;