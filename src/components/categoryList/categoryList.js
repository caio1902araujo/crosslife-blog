import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './categoryList.module.css';

const handleActiveClass = (isActive) => {
  return isActive ? {color: "#6be067"}:{}
}

const CategoryList = () => {
  return (
    <ul className={styles.categoryList}>
      <li> 
        <NavLink to='/categoria/academia' style={({isActive}) =>  handleActiveClass(isActive)} className={styles.category}>academia</NavLink> 
      </li>

      <li>
        <NavLink to='/categoria/esportes' style={({isActive}) =>  handleActiveClass(isActive)} className={styles.category}>esportes</NavLink>
      </li>

      <li>
        <NavLink to='/categoria/fitness' style={({isActive}) =>  handleActiveClass(isActive)} className={styles.category}>fitness</NavLink>
      </li>

      <li>
        <NavLink to='/categoria/nutricao' style={({isActive}) =>  handleActiveClass(isActive)} className={styles.category}>nutrição</NavLink>
      </li>

      <li>
        <NavLink to='/categoria/receitas' style={({isActive}) =>  handleActiveClass(isActive)} className={styles.category}>receitas</NavLink>
      </li>

      <li>
        <NavLink to='/categoria/saude' style={({isActive}) =>  handleActiveClass(isActive)} className={styles.category}>saúde</NavLink>
      </li>
    </ul>
  )
}

export default CategoryList