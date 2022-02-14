import React from 'react';
import styles from './buttonIcon.module.css';
import { ReactComponent as Theme } from '../../assets/theme.svg';
import {ReactComponent as Search} from '../../assets/search.svg';
import {ReactComponent as HamburgerMenu} from '../../assets/hamburgerMenu.svg';

const svgs = {
  theme: <Theme className={styles.icon}/>,
  search: <Search className={styles.icon}/>,
  hamburgerMenu: <HamburgerMenu className={styles.icon}/>,
}

const ButtonIcon = ({icon}) => {
  return (
    <button className={styles.button}>
      {svgs[icon]}
    </button>
  )
}

export default ButtonIcon;