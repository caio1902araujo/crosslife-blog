import React from 'react';
import FormSearch from '../formSearch/formSearch';
import styles from './searchDetails.module.css';

const SearchDetails = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <FormSearch handleSubmit={(event) => event.preventDefault()} typeStyle='primary'/>
        <div>
          <h1 className={styles.title}>Procure Noticias</h1>
          <p className={styles.description}>385 de noticias para ficar por dentro do mundo crosslife</p>
        </div>
      </div>
    </div>
  )
}

export default SearchDetails