import React from 'react';
import styles from './linkOverlay.module.css'
import { Link } from 'react-router-dom';

const LinkOverlay = ({url}) => {
  return (
    <Link to={url} className={styles.linkOverlay}></Link>
  )
}

export default LinkOverlay