import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ReactComponent as Arrow } from '../../assets/arrow.svg';

import styles from './navMobile.module.css';

const translateTheme = {
  dark: 'escuro',
  light: 'claro',
};

const NavMobile = ({setNavMobile, theme, setTheme, externalLink}) => {
  const closeNavMobile = React.useCallback(() => setNavMobile(false),[setNavMobile]);
  
  const handleClick = ({target}) => {
    const links = Array.from(document.querySelectorAll('a'));
    const isLink = links.some(link => link.contains(target));
    if(isLink) closeNavMobile();
  }

  React.useEffect(()=>{
    document.documentElement.classList.add(styles.noScroll);
    if(externalLink) externalLink.addEventListener('mousedown', closeNavMobile);

    return () => {
      document.documentElement.classList.remove(styles.noScroll);
      externalLink.removeEventListener('mousedown', closeNavMobile);
    };
  }, [externalLink, closeNavMobile])

  return (
    <nav className={styles.nav} onClick={handleClick}>
      <Link to='/categoria/academia' className={styles.listItem}>
        academia
        <div className={styles.icon}>
          <Arrow />
        </div>
      </Link>
      <Link to='/categoria/esportes' className={styles.listItem}>
        esportes
        <div className={styles.icon}>
          <Arrow />
        </div>
      </Link>
      <Link to='/categoria/fitness' className={styles.listItem}>
        fitness
        <div className={styles.icon}>
          <Arrow />
        </div>
      </Link>
      <Link to='/categoria/nutricao' className={styles.listItem}>
        nutrição
        <div className={styles.icon}>
          <Arrow />
        </div>
      </Link>
      <Link to='/categoria/receitas' className={styles.listItem}>
        receitas
        <div className={styles.icon}>
          <Arrow />
        </div>
      </Link>
      <Link to='/categoria/saude' className={styles.listItem}>
        saúde
        <div className={styles.icon}>
          <Arrow />
        </div>
      </Link>
      <div onClick={() => setTheme((theme) => theme === 'light' ? 'dark' : 'light')} className={styles.listItem}>
        <span>tema: {translateTheme[theme]}</span>
        <div className={styles.icon}>
          <Arrow />
        </div>
      </div>
    </nav>
  )
}

NavMobile.propTypes = {
  setNavMobile: PropTypes.func.isRequired,
  externalLink: PropTypes.object,
  theme: PropTypes.string.isRequired, 
  setTheme: PropTypes.func.isRequired
};

export default NavMobile;
