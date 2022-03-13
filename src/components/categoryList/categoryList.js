import React from 'react';
import styles from './categoryList.module.css';
import { NavLink } from 'react-router-dom';

const changeActive = (isActive) => {
  return isActive ? {color: "#6be067"}:{}
}

const CategoryList = () => {
  return (
    <ul className={styles.list}>
      <li>
        <NavLink to='/categoria/academia' style={({isActive}) => changeActive(isActive)} className={styles.listItem}>
          academia
        </NavLink>
      </li>
      <li>
        <NavLink to='/categoria/esportes' style={({isActive}) => changeActive(isActive)} className={styles.listItem}>
          esportes
        </NavLink>
      </li>
      <li>
        <NavLink to='/categoria/fitness' style={({isActive}) => changeActive(isActive)} className={styles.listItem}>
          fitness
        </NavLink>
      </li>
      <li>
        <NavLink to='/categoria/nutricao' style={({isActive}) => changeActive(isActive)} className={styles.listItem}>
          nutrição
        </NavLink>
      </li>
      <li>
        <NavLink to='/categoria/receitas' style={({isActive}) => changeActive(isActive)} className={styles.listItem}>
          receitas
        </NavLink>
      </li>
      <li>
        <NavLink to='/categoria/saude' style={({isActive}) => changeActive(isActive)} className={styles.listItem}>
          saúde
        </NavLink>
      </li>
    </ul>
  )
}

export default CategoryList
