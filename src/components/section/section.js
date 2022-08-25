import React from 'react';
import PropTypes from 'prop-types';

import styles from './section.module.css';

const typesSectionStyle = {
  primary: {
    containerStyle: styles.container,
    titleStyle: styles.title,
  },
  secondary: {
    containerStyle: styles.containerTopBorder,
    titleStyle: styles.titleGreen,
  }
};

const Section = ({title, typeStyle, children, ...props}) => {
  const { containerStyle, titleStyle } = typesSectionStyle[typeStyle];

  return (
    <section className={containerStyle} {...props}>
      <div className={styles.wrapper}>
        {title && <h1 className={titleStyle}>{title}</h1>}
        {children}
      </div>
    </section>
  )
}

Section.defaultProps = {
  typeStyle: 'primary',
};

Section.propTypes = {
  title: PropTypes.string,
  typeStyle: PropTypes.oneOf(['primary', 'secondary']),
};

export default Section;
