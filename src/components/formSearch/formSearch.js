import React from 'react';
import styles from './formSearch.module.css';
import Input from '../input/input';
import { ReactComponent as Search } from '../../assets/search.svg';
import { ReactComponent as Cross } from '../../assets/cross.svg';
import PropTypes from 'prop-types';

const typesFormSearchStyle = {
  primary: {
    wrapperStyle: styles.wrapperPrimary,
    iconStyle: styles.iconSearchPrimary,
    inputStyle: 'inputSearchPrimary',
    containerStyle: styles.container,
  },
  secondary: {
    wrapperStyle: styles.wrapperSecondary,
    iconStyle: styles.iconSearchSecondary,
    inputStyle: 'inputSearchSecondary',
    containerStyle: '',
  }
}

const FormSearch = ({handleSubmit, typeStyle}) => {
  const [ value, setValue ] = React.useState('');
  const refIconCross = React.useRef(null);
  const { wrapperStyle, iconStyle, inputStyle, containerStyle } = typesFormSearchStyle[typeStyle];

  const resetValueInput = () => {
    const iconCross = refIconCross.current;
    const inputSearch = document.querySelectorAll("#search")[1];
    inputSearch.value = "";
    iconCross.classList.remove(styles.active);
  }

  const onChange = ({target}) => {
    const iconCross = refIconCross.current;

    if(target.value.length > 0 && iconCross && !iconCross.classList.contains(styles.active)){
      iconCross.classList.add(styles.active);
      iconCross.addEventListener('mousedown', resetValueInput);
    }
    else if (target.value.length === 0){
      iconCross.classList.remove(styles.active);
      iconCross.removeEventListener('mousedown', resetValueInput);
    };

    setValue(target.value);
  };

  return (
    <div className={containerStyle}>
      <form className={wrapperStyle} onSubmit={handleSubmit}>
        <div className={iconStyle}>
          <Search />
        </div>
        <Input classInput={inputStyle} id='search' name='q' placeholder='Pesquisar' onChange={onChange} value={value}/>
        {typeStyle === 'primary' ? <button ref={refIconCross} className={styles.iconCross}><Cross/></button> : null}
      </form>
      {
        typeStyle === 'primary' ? 
        <div>
          <h1 className={styles.title}>Procure Noticias</h1>
          <p className={styles.description}>385 de noticias para ficar por dentro do mundo crosslife</p>
        </div> : null
      }
    </div>
  )
}

FormSearch.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  typeStyle: PropTypes.string.isRequired,
};

export default FormSearch