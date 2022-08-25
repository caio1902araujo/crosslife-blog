import React from 'react';
import PropTypes from 'prop-types';

import ArticleCard from '../articleCard/articleCard';
import Skeleton from '../skeleton/skeleton';
import Warning from '../warning/warning';
import Pagination from '../pagination/pagination';

import useFetch from '../../hooks/useFetch';
import usePagination from '../../hooks/usePagination';

import { ALL_NEWS_GET } from '../../services/api';

import styles from './feedNews.module.css';

const FeedNews = ({filter, currentPage, setCurrentPage}) => {
  const { data, setData, loading, error, request } = useFetch();
  const { perPage, paginationRange } = usePagination();
  const totalItemsRef = React.useRef();
  const cardStyle = 'cardPrimary';
  let content;

  React.useEffect(()=>{
    (async () => {
      const query = {
        limit: perPage,
        offset: (currentPage - 1) * perPage,
      }

      if (filter) Object.assign(query, filter);

      const {url, options} = ALL_NEWS_GET(query);
      
      await request(url, options);

    })();

    return () => { 
      setData();
    }
  
  }, [currentPage, filter]);

  if (error) {
    content = <Warning title='Erro ao carregar conteúdo' description={error} svg='error'/> 
  }

  else if (loading){ 
    content = <div className={styles.wrapper}>
      {
        Array.from({length: 10}).map((_, index) => <Skeleton key={index} typeStyleSkeleton={cardStyle}/>)
      }
    </div>
  }

  else if(data){
    const news = data[0];
    totalItemsRef.current = data[1];
    
    content = news.length === 0 ?
    <Warning title='Nenhum resultado encontrado' description='Parece que não conseguimos encontrar nenhum resultado com base em sua pesquisa.' svg='notFound'/> :
    <div className={styles.wrapper}>  
      {
        news.map((article) => (
          <ArticleCard key={article.title} title={article.title} nameAuthor={article.author.name} usernameAuthor={article.author.username} date={article.createdAt} category={article.category} typeCardStyle={cardStyle}/> 
        ))
      }
    </div>
  }

  else {
    content = null;
  }

  return (
    <>
      { content }
      {
        totalItemsRef.current ?
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} perPage={perPage} paginationRange={paginationRange} totalItems={totalItemsRef.current}/> :
        null
      }
    </>
  )
}

FeedNews.propTypes = {
  filter: PropTypes.object,
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func,
};

export default FeedNews;
