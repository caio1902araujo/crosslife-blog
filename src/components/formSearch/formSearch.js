import React from 'react';
import styles from './formSearch.module.css';
import useForm from '../../hooks/useForm';
import Input from '../input/input';
import { ReactComponent as Search } from '../../assets/search.svg';


const FormSearch = () => {
  const search = useForm(false);

  return (
    <form className={styles.form}>
      <div className={styles.wrapperIcon}>
        <Search />
      </div>
      <Input classInput='inputSearchSecondary' id='search' placeholder='Pesquisar' {...search}/>
    </form>
  )
}

export default FormSearch