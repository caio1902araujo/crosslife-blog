import React from 'react';
import PropTypes from 'prop-types';

import articleCardStyles from '../articleCard/articleCard.module.css';

import styles from './skeleton.module.css';

const stylesSkeleton = {
  cardPrimary: articleCardStyles.cardPrimary,
  cardSecondary: articleCardStyles.cardSecondary,
  imagePrimary: styles.imagePrimary,
  imageSecondary: styles.imageSecondary,
};

const Skeleton = ({typeStyleSkeleton}) => {
  const classStyleSkeleton = stylesSkeleton[typeStyleSkeleton];
  return <div className={`${styles.skeleton} ${classStyleSkeleton}`}></div>;
}

Skeleton.propTypes = {
  typeStyleSkeleton: PropTypes.string.isRequired,
};

export default Skeleton;
