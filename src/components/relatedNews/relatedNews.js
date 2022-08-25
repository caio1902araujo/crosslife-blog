import React from 'react';
import PropTypes from 'prop-types';

import ArticleCard from '../articleCard/articleCard';
import Skeleton from '../skeleton/skeleton';
import Warning from '../warning/warning';

import useFetch from '../../hooks/useFetch';

import { RELATED_NEWS_GET } from '../../services/api';

import styles from '../relatedNews/relatedNews.module.css';

const RelatedNews = ({category}) => {
  const {data, setData, loading, error, request} = useFetch();
  const cardStyle = 'cardPrimary';

  React.useEffect(()=>{
    (async() => {
      const {url, options} = RELATED_NEWS_GET(category);
      await request(url, options);
    })();

    return () => { 
      setData();
    }

  }, [category]);

  if (error) return <Warning title='Erro ao carregar conteúdo' description={error} svg='error'/> 

  if(loading){
    return (
      <div className={styles.wrapper}>
      {
        Array.from({length: 4}).map((_, index) => <Skeleton key={index} typeStyleSkeleton={cardStyle}/>)
      }
    </div>
    )
  }

  if(data){
    const [ news ] = data;

    return (
      <div className={styles.wrapper}>
        {
          news.map((article) => (
            <ArticleCard  key={article.title} title={article.title} nameAuthor={article.author.name} usernameAuthor={article.author.username} date={article.createdAt} category={article.category} typeCardStyle={cardStyle}/>
          ))
        }
      </div>
    )
  }

  else return null;
}

RelatedNews.propTypes = {
  category: PropTypes.string.isRequired,
};

export default RelatedNews;
