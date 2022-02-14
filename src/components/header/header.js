import React from 'react';
import styles from './header.module.css';
import CategoryList from '../categoryList/categoryList';
import Logo from '../logo/logo';
import FormSearch from '../formSearch/formSearch';
import ButtonIcon from '../buttonIcon/buttonIcon';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <ButtonIcon icon="hamburgerMenu"/>
        <nav className={styles.navigation}>
          <Logo />
          <CategoryList />
        </nav>
        <FormSearch />
        <ButtonIcon icon="search"/>
        <ButtonIcon icon="theme"/>
      </div>
    </header>
  );
};

export default Header;
