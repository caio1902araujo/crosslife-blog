import React, { useRef } from 'react';
import styles from './header.module.css';
import CategoryList from '../categoryList/categoryList';
import Logo from '../logo/logo';
import FormSearch from '../formSearch/formSearch';
import NavMobile from '../navMobile/navMobile';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as Cross } from '../../assets/cross.svg';
import { ReactComponent as Theme } from '../../assets/theme.svg';
import { ReactComponent as Search } from '../../assets/search.svg';
import { ReactComponent as HamburgerMenu } from '../../assets/hamburgerMenu.svg';
import PropTypes from 'prop-types';

const Header = ({setTheme}) => {
  const navigate = useNavigate();
  const refExternalLink = useRef(null);
  const [navMobile, setNavMobile] = React.useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <button className={styles.button} onClick={() => setNavMobile(!navMobile)}>
            { navMobile ? <Cross /> : <HamburgerMenu /> }
          </button>
          <nav className={styles.navigation}>
            <Link to='/' end='' ref={refExternalLink}> <Logo /> </Link>
            <CategoryList />
          </nav>

          <FormSearch handleSubmit={() => navigate('pesquisar')} typeStyle='secondary'/>

          <Link to='/pesquisar' className={styles.button}>
            <Search />
          </Link>
          
          <button className={styles.button} onClick={() => setTheme((theme) => theme === 'light' ? 'dark' : 'light')}>
            <Theme />
          </button>
        </div>
        { navMobile && <NavMobile setNavMobile={setNavMobile} externalLink={refExternalLink.current}/> }
      </header>
    </>
  );
};

Header.propTypes = {
  setTheme: PropTypes.func.isRequired,
};

export default Header;
