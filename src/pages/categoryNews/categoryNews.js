import React from 'react';
import { useParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

import FeedNews from '../../components/feedNews/feedNews';
import Intro from '../../components/intro/intro';
import Section from '../../components/section/section';
import Head from '../../components/head/head';

const CategoryNews = () => {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = React.useState(() => +searchParams.get('p') || 1);
  
  return (
    <>
      <Head title={category[0].toUpperCase() + category.slice(1)} description={`Todas as noticias relacionadas a ${category}`}/>

      <Intro title={category} 
        description='Aproveite o acervo com diversas notícias separadas por categoria e se matenha sempre informado.'
        typeIntroStyle='secondary'
      />

      <Section typeStyle='primary'>
        <FeedNews filter={{category: category}} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </Section>
    </>
  );
};

export default CategoryNews;
