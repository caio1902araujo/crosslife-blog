import React from 'react';

import styles from './loading.module.css';

function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.loading}></div>
      <p className={styles.text}>Carregando...</p>
    </div>
  )
}

export default Loading;
