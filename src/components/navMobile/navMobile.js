import React from 'react';
import styles from './navMobile.module.css';
import { Link, useNavigate } from 'react-router-dom';
import FormSearch from '../formSearch/formSearch';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import PropTypes from 'prop-types';

const NavMobile = ({setNavMobile, externalLink}) => {
  const navigate = useNavigate();
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
      <FormSearch handleSubmit={() => navigate('pesquisar')} typeStyle='secondary'/>

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
    </nav>
  )
}

NavMobile.propTypes = {
  setNavMobile: PropTypes.func.isRequired,
  externalLink: PropTypes.object
};

export default NavMobile