import React, { useRef } from 'react';
import styles from './header.module.css';
import ListRow from '../listRow/listRow';
import Logo from '../logo/logo';
import FormSearch from '../formSearch/formSearch';
import NavMobile from '../navMobile/navMobile';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as Cross } from '../../assets/cross.svg';
import { ReactComponent as Theme } from '../../assets/theme.svg';
import { ReactComponent as Search } from '../../assets/search.svg';
import { ReactComponent as HamburgerMenu } from '../../assets/hamburgerMenu.svg';
import PropTypes from 'prop-types';

const categoryListItems = [
  {
    content: "Academia",
    link: {
      href: "/categoria/academia",
      isNavLink: true,
    }
  },
  {
    content: "Esportes",
    link: {
      href: "/categoria/esportes",
      isNavLink: true,
    }
  },
  {
    content: "Fitness",
    link: {
      href: "/categoria/fitness",
      isNavLink: true,
    }
  },
  {
    content: "Nutrição",
    link: {
      href: "/categoria/nutricao",
      isNavLink: true,
    }
  },
  {
    content: "Receitas",
    link: {
      href: "/categoria/receitas",
      isNavLink: true,
    }
  },
  {
    content: "Saúde",
    link: {
      href: "/categoria/saude",
      isNavLink: true,
    }
  }
];

const Header = ({setTheme}) => {
  const navigate = useNavigate();
  const refExternalLink = useRef(null);
  const [navMobile, setNavMobile] = React.useState(false);

  return (
    <>
      <header className={styles.container}>
        <div className={styles.wrapper}>
          <button className={styles.button} aria-label="Alternar navegação" onClick={() => setNavMobile(!navMobile)}>
            { navMobile ? <Cross /> : <HamburgerMenu /> }
          </button>

          <nav className={styles.navigation}>
            <Link to='/' end='' ref={refExternalLink}> <Logo /> </Link>
            <ListRow listItems={categoryListItems} typeStyle="primary"/>
          </nav>

          <FormSearch handleSubmit={() => navigate('pesquisar')} typeStyle='secondary'/>

          <Link to='/pesquisar' aria-label="Abrir pesquisa" className={styles.button}>
            <Search />
          </Link>
          
          <button className={styles.button} aria-label="mudar tema" onClick={() => setTheme((theme) => theme === 'light' ? 'dark' : 'light')}>
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
