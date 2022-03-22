import React from 'react';
import styles from './feedNews.module.css';
import ArticleCard from '../articleCard/articleCard';
import PropTypes from 'prop-types';

const typesGridNews = {
  allNews: {
    gridStyle: styles.gridColumnSpan,
    typeArticleStyle: "primary",
  },
  relatedNews: {
    gridStyle: styles.gridPrimary,
    typeArticleStyle: "primary",
  },
  mostReadNews: {
    gridStyle: styles.gridSecondary,
    typeArticleStyle: "secondary",
  },
}

const FeedNews = ({typeGridNews}) => {
  const { gridStyle, typeArticleStyle } = typesGridNews[typeGridNews]

  return (
    <div className={gridStyle}>
      <ArticleCard title="Neymar cai após tomar whey após tomar whey" author="Caio Araujo" date="4 horas" category="esportes" typeStyle={typeArticleStyle} number={1}/>
      <ArticleCard title="Conheça os 6 exercícios ideais para perder aquela gordurinha" author="Caio Araujo" date="4 horas" category="esportes" typeStyle={typeArticleStyle} number={2}/>
      <ArticleCard title="Melhores músicas para treinar" author="Caio Araujo" date="4 horas" category="esportes" typeStyle={typeArticleStyle} number={3}/>
      <ArticleCard title="Afinal, posso ou não tomar bomba" author="Caio Araujo" date="4 horas" category="esportes" typeStyle={typeArticleStyle} number={4}/>
    </div>
  )
}

FeedNews.propTypes = {
  typeGridNews: PropTypes.string.isRequired,
};

export default FeedNews