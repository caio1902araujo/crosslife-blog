import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import Intro from '../../components/intro/intro';
import FeedNews from '../../components/feedNews/feedNews';
import Section from '../../components/section/section';
import Loading from '../../components/loading/loading';
import Warning from '../../components/warning/warning';
import Head from '../../components/head/head';

import useFetch from '../../hooks/useFetch';

import { AUTHOR_GET } from '../../services/api';

const AuthorNews = () => {
  const { data, setData, loading, error, request } = useFetch();
  const { username } = useParams();
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = React.useState(() => +searchParams.get('p') || 1);

  React.useEffect(() => {

    (async ()=> {
      const {url, options} = AUTHOR_GET(username);
      await request(url, options);
    })();

    return () => {
      setData();
    }

  }, [username]);

  if(error){
    return <Warning title='Erro ao carregar conteúdo' description={error} isFull={true} svg='error'/>
  }

  if (loading){
    return <Loading />
  }

  if(data) return (
    <>
      <Head title={data.name} description={`Notícias do ${data.name}`}/>

      <Intro
        image={{
          url: data.avatarUrl,
          namespace: data.avatar,
        }} 
        title={data.name} 
        description={data.description}
        typeIntroStyle='secondary'
      />
      
      <Section typeStyle='primary'>
        <FeedNews  filter={{usernameAuthor: username}} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </Section>

    </>
  )

  else return null;
}

export default AuthorNews;
