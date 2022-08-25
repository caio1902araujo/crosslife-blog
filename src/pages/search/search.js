import React from 'react';
import { useSearchParams } from 'react-router-dom';

import FeedNews from '../../components/feedNews/feedNews';
import FormSearch from '../../components/formSearch/formSearch';
import Section from '../../components/section/section';
import Head from '../../components/head/head';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = React.useState(() => +searchParams.get('p') || 1);
  const q = searchParams.get('q');

  return (
    <>
      <Head title='Pesquisar' description={`Área para buscar todas as notícias do acervo da crosslife`}/>

      <FormSearch q={q} setSearchParams={setSearchParams} setCurrentPage={setCurrentPage}/>

      <Section typeStyle='primary'>
        <FeedNews filter={q ? {title: q} : {}} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </Section>
    </>
  );
};

export default Search;
