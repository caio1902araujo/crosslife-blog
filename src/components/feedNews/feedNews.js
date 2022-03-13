import React from 'react';
import styles from './feedNews.module.css';
import Article from '../article/article';
import PropTypes from 'prop-types';

const typesGridNews = {
  allNews: {
    gridStyle: styles.gridColumnSpan,
    articleStyle: "cardPrimary",
  },
  relatedNews: {
    gridStyle: styles.gridPrimary,
    articleStyle: "cardPrimary",
  },
  mostReadNews: {
    gridStyle: styles.gridSecondary,
    articleStyle: "cardSecondary",
  },
}

const FeedNews = ({typeGridNews}) => {
  const { gridStyle, articleStyle } = typesGridNews[typeGridNews]

  return (
    <div className={gridStyle}>
      <Article title="Neymar cai após tomar whey após tomar whey" author="Caio Araujo" date="4 horas" category="esportes" typeArticle={articleStyle} number={1}/>
      <Article title="Conheça os 6 exercícios ideais para perder aquela gordurinha" author="Caio Araujo" date="4 horas" category="esportes" typeArticle={articleStyle} number={2}/>
      <Article title="Melhores músicas para treinar" author="Caio Araujo" date="4 horas" category="esportes" typeArticle={articleStyle} number={3}/>
      <Article title="Afinal, posso ou não tomar bomba" author="Caio Araujo" date="4 horas" category="esportes" typeArticle={articleStyle} number={4}/>
      <Article title="Os benefícios dos shakes da crosslife " author="Caio Araujo" date="4 horas" category="esportes" typeArticle={articleStyle} number={5}/>
      <Article title="Neymar nosso novo sócio da academia" author="Caio Araujo" date="4 horas" category="esportes" typeArticle={articleStyle} number={6}/>
    </div>
  )
}

FeedNews.propTypes = {
  typeGridNews: PropTypes.string.isRequired,
};

export default FeedNews