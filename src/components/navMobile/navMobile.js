import React from 'react';
import styles from './navMobile.module.css';
import { Link } from 'react-router-dom';
import FormSearch from '../formSearch/formSearch';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import PropTypes from 'prop-types';

const NavMobile = ({setNavMobile, externalLink}) => {
  const closeNavMobile = React.useCallback(() => setNavMobile(false),[setNavMobile]);

  const handleClick = ({target}) => {
    if(target.hasAttribute('href')){
      closeNavMobile();
    }
  }

  React.useEffect(()=>{
    if(externalLink) externalLink.addEventListener('mousedown', closeNavMobile);

    return () => externalLink.removeEventListener('mousedown', closeNavMobile);
  }, [externalLink, closeNavMobile])

  return (
    <nav className={styles.nav} onClick={handleClick}>
      <FormSearch />
      <Link to='/categoria/academia' className={styles.listItem}>
        academia
        <div className={styles.wrapperIcon}>
          <Arrow />
        </div>
      </Link>
      <Link to='/categoria/esportes' className={styles.listItem}>
        esportes
        <div className={styles.wrapperIcon}>
          <Arrow />
        </div>
      </Link>
      <Link to='/categoria/fitness' className={styles.listItem}>
        fitness
        <div className={styles.wrapperIcon}>
          <Arrow />
        </div>
      </Link>
      <Link to='/categoria/nutricao' className={styles.listItem}>
        nutrição
        <div className={styles.wrapperIcon}>
          <Arrow />
        </div>
      </Link>
      <Link to='/categoria/receitas' className={styles.listItem}>
        receitas
        <div className={styles.wrapperIcon}>
          <Arrow />
        </div>
      </Link>
      <Link to='/categoria/saude' className={styles.listItem}>
        saúde
        <div className={styles.wrapperIcon}>
          <Arrow />
        </div>
      </Link>
    </nav>
  )
}

NavMobile.propTypes = {
  setNavMobile: PropTypes.func.isRequired,
};

export default NavMobile