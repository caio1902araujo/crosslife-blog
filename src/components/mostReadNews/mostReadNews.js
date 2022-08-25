import React from 'react';

import ArticleCard from '../articleCard/articleCard';
import Skeleton from '../skeleton/skeleton';
import Warning from '../warning/warning';

import useFetch from '../../hooks/useFetch';

import { MOST_ACCESSED_NEWS_GET } from '../../services/api';

import styles from './mostReadNews.module.css';

const MostReadNews = () => {
  const {data, setData, loading, error, request} = useFetch();
  const cardStyle = 'cardSecondary';

  React.useEffect(()=>{
    (async () => {
      const {url, options} = MOST_ACCESSED_NEWS_GET();
      await request(url, options);
    })();
    return () => { 
      setData();
    }
  
  }, []);

  if (error) return <Warning title='Erro ao carregar conteúdo' description={error} svg='error'/> 

  if (loading){ 
    return (
      <div className={styles.wrapper}>
        {
          Array.from({length: 6}).map((_, index) => <Skeleton key={index} typeStyleSkeleton={cardStyle}/>)
        }
      </div>
    )
  }

  if(data){
    return (
      <>
        <div className={styles.wrapper} >
          {
            data.map((article, index) => (
              <ArticleCard key={article.news.title} title={article.news.title} nameAuthor={article.news.author.name} usernameAuthor={article.news.author.username} date={article.news.createdAt} typeCardStyle={cardStyle} number={index+1}/>
            ))
          }
        </div>
      </>  
    )
  }

  else return null;
}

export default MostReadNews;
