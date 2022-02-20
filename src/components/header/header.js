import React, { useRef } from 'react';
import styles from './header.module.css';
import stylesButton from '../button/button.module.css';
import CategoryList from '../categoryList/categoryList';
import Logo from '../logo/logo';
import FormSearch from '../formSearch/formSearch';
import NavMobile from '../navMobile/navMobile';
import Button from '../button/button';
import { Link } from 'react-router-dom';
import { ReactComponent as Cross } from '../../assets/cross.svg';
import { ReactComponent as Theme } from '../../assets/theme.svg';
import { ReactComponent as Search } from '../../assets/search.svg';
import { ReactComponent as HamburgerMenu } from '../../assets/hamburgerMenu.svg';
import PropTypes from 'prop-types';

const Header = ({setTheme}) => {
  const refExternalLink = useRef(null);
  const [navMobile, setNavMobile] = React.useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <Button styleClass="buttonSecondary" onClick={() => setNavMobile(!navMobile)}>
            { navMobile ? <Cross /> : <HamburgerMenu /> }
          </Button>
          <nav className={styles.navigation}>
            <Link to='/' end='' ref={refExternalLink}> <Logo /> </Link>
            <CategoryList />
          </nav>
          <FormSearch />
          <Link to='/pesquisar' className={stylesButton.buttonSecondary}>
            <Search />
          </Link>
          <Button styleClass="buttonSecondary" onClick={() => setTheme((theme) => theme === 'light' ? 'dark' : 'light')}>
            <Theme />
          </Button>
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
