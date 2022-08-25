import React from 'react';
import PropTypes from 'prop-types';

import Input from '../input/input';

import { ReactComponent as Search } from '../../assets/search.svg';
import { ReactComponent as Cross } from '../../assets/cross.svg';

import styles from './formSearch.module.css';

const FormSearch = ({q, setSearchParams, setCurrentPage}) => {
  const [ value, setValue ] = React.useState(() => q ? q : '');
  const [visibleResetButton, setVisibleResetButton] = React.useState(() => q ? true : false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = event.target[0].value.trim();

    if(value){
      setSearchParams({'q': value});
      setCurrentPage(1)
    }
  }

  const resetValueInput = () => {
    setVisibleResetButton(false);
    setValue('');
  }

  const onChange = ({target}) => {
    if(target.value.length > 0 && !visibleResetButton){
      setVisibleResetButton(true);
    }
    else if (target.value.length === 0){
      setVisibleResetButton(false);
    }

    setValue(target.value);
  }

  return (
    <div className={styles.container}>
      <form className={styles.wrapper} autoComplete='off' onSubmit={handleSubmit}>
        <div className={styles.iconSearch}>
          <Search />
        </div>
        <Input id='search' name='q' placeholder='Pesquisar' onChange={onChange} value={value} aria-label='pesquisar'/>
        {
          visibleResetButton &&
          <button type='reset' aria-label='Limpar texto do campo de pesquisa' onClick={resetValueInput} className={styles.iconCross}>
            <Cross/>
          </button>
        }
      </form>

      <div>
        <h1 className={styles.title}>{q ? q : 'Procure Noticias'}</h1>
        <p className={styles.description}>Procure por qualquer tema que tiver interessado no momento</p>
      </div> 
    </div>
  );
}

FormSearch.propTypes = {
  setSearchParams: PropTypes.func,
  q: PropTypes.string,
}

export default FormSearch;
