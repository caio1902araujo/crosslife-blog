import React from 'react';
import styles from './formSearch.module.css';
import Input from '../input/input';
import { ReactComponent as Search } from '../../assets/search.svg';
import { ReactComponent as Cross } from '../../assets/cross.svg';
import PropTypes from 'prop-types';

const typesFormSearchStyle = {
  primary: {
    iconSearchStyle: styles.iconSearchPrimary,
    iconCrossStyle: styles.iconCrossPrimary,
    inputStyle: 'primary',
  },
  secondary: {
    iconSearchStyle: styles.iconSearchSecondary,
    iconCrossStyle: styles.iconCrossSecondary,
    inputStyle: 'secondary',
  }
}

const FormSearch = ({handleSubmit, typeStyle}) => {
  const refIconCross = React.useRef(null);
  const [ value, setValue ] = React.useState('');
  const {iconSearchStyle, iconCrossStyle, inputStyle } = typesFormSearchStyle[typeStyle];

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
    <form className={styles.wrapper} autoComplete="off" onSubmit={handleSubmit}>
      <div className={iconSearchStyle}>
        <Search />
      </div>
      <Input typeStyle={inputStyle} id='search' name='q' placeholder='Pesquisar' onChange={onChange} value={value} aria-label="pesquisar"/>
      <button ref={refIconCross} aria-label="Limpar texto do campo de pesquisa" className={iconCrossStyle}><Cross/></button>
    </form>
  )
}

FormSearch.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  typeStyle: PropTypes.string.isRequired,
};

export default FormSearch