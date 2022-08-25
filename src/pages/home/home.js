import React from 'react';
import { useSearchParams } from 'react-router-dom';

import FeedNews from '../../components/feedNews/feedNews';
import MostReadNews from '../../components/mostReadNews/mostReadNews';
import Intro from '../../components/intro/intro';
import Section from '../../components/section/section';
import Head from '../../components/head/head';

const Home = () => {
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = React.useState(() => +searchParams.get('p') || 1);
  
  return (
    <>
      <Head title='Home' description={`Página inicial do blog`}/>

      <Intro title='crosslife news' 
        description='Aproveite as notícias diárias sobre o que ocorre no mundo crosslife e tenha acesso a todo conhecimento na palma da sua mão'
        textButton='veja mais'
        typeIntroStyle='primary'
      />

      <Section title='mais lidas' typeStyle='primary' id='mostRead'>
        <MostReadNews />
      </Section>

      <Section title='notícias' typeStyle='secondary'>
        <FeedNews currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </Section>
    </>
  );
};

export default Home;
