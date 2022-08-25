import React from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';

import styles from './pagination.module.css';

const Pagination = ({currentPage, setCurrentPage, totalItems, perPage, paginationRange}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const totalPage = Math.ceil(totalItems / perPage);
  const listNumber = paginationRange({currentPage, totalPage});

  React.useEffect(()=>{
    const p = +searchParams.get('p') || 1;

    if(p !== currentPage){
      let params = {p: currentPage};
      if (searchParams.has('q')) params['q'] = searchParams.get('q');
      setSearchParams(params);
    }

  }, [currentPage]);

  const controls = {
    next(){  
      const page = currentPage + 1;
      controls.goTo(page);
    },
    prev(){
      const page = currentPage - 1;
      controls.goTo(page);
    },
    goTo(page){
      if(page > totalPage) setCurrentPage(totalPage);
      else if(page < 1) setCurrentPage(1);
      else setCurrentPage(page);
    }
  };

  return (
    <ul className={styles.wrapper}>
      <li className={styles.item}> 
        <button className={styles.button} onClick={controls.prev}> 
          &lt; 
        </button>
      </li>

      {
        listNumber.map((number) => {
          return(
            <li key={number} className={`${styles.item} ${(number === currentPage)? styles.active : ''}`} >
              <button className={styles.button} onClick={() => {controls.goTo(number)}}>
                { number }
              </button>
            </li>
          )
        })
      }

      <li className={styles.item}>
        <button className={styles.button} onClick={controls.next}> 
          &gt; 
        </button>
      </li>
    </ul>
  )
}

Pagination.propTypes = {
  perPage: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  paginationRange: PropTypes.func.isRequired,
};

export default Pagination;
