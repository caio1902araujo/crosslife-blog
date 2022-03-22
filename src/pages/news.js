import React from 'react';
import Article from '../components/article/article';
import Section from '../components/section/section';

const News = () => {
  return (
    <>
      <Article />
      <Section title="mais noticias" typeStyle="primary" typeGridNews="relatedNews"/>
    </>
  );
};

export default News;
