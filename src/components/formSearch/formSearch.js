import React from 'react';
import styles from './formSearch.module.css';
import Input from '../input/input';
import { ReactComponent as Search } from '../../assets/search.svg';
import { ReactComponent as Cross } from '../../assets/cross.svg';
import PropTypes from 'prop-types';

const typesFormSearchStyle = {
  primary: {
    wrapperStyle: styles.wrapperPrimary,
    iconSearchStyle: styles.iconSearchPrimary,
    iconCrossStyle: styles.iconCrossPrimary,
    inputStyle: 'primary',
    containerStyle: styles.container,
  },
  secondary: {
    wrapperStyle: styles.wrapperSecondary,
    iconSearchStyle: styles.iconSearchSecondary,
    iconCrossStyle: styles.iconCrossSecondary,
    inputStyle: 'secondary',
    containerStyle: '',
  }
}

const FormSearch = ({handleSubmit, typeStyle}) => {
  const refIconCross = React.useRef(null);
  const [ value, setValue ] = React.useState('');
  const { wrapperStyle, iconSearchStyle, iconCrossStyle, inputStyle, containerStyle } = typesFormSearchStyle[typeStyle];

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
      <form className={wrapperStyle} autoComplete="off" onSubmit={handleSubmit}>
        <div className={iconSearchStyle}>
          <Search />
        </div>
        <Input typeStyle={inputStyle} id='search' name='q' placeholder='Pesquisar' onChange={onChange} value={value} aria-label="pesquisar"/>
        <button ref={refIconCross} aria-label="Limpar texto do campo de pesquisa" className={iconCrossStyle}><Cross/></button>
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