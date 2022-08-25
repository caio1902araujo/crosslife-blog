import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import ListRow from '../../components/listRow/listRow';
import Image from '../../components/image/image';
import AuthorCard from '../../components/authorCard/authorCard';
import Loading from '../../components/loading/loading';
import Warning from '../../components/warning/warning';
import Section from '../../components/section/section';
import RelatedNews from '../../components/relatedNews/relatedNews';
import Head from '../../components/head/head';

import useFetch from '../../hooks/useFetch';

import { ReactComponent as Facebook } from '../../assets/facebook.svg';
import { ReactComponent as Twitter } from '../../assets/twitter.svg';

import timeInterval from '../../utils/timeInterval';

import { NEWS_GET } from '../../services/api';

import styles from './article.module.css';

const socialNetworksListItems = [
  {
    content: <Facebook/>,
    link: {
      href: 'https://www.facebook.com/CrossLifeFigueira/',
      isExternalLink: true,
      ariaLabel: 'compartilhar no facebook',
    }
  },
  {
    content: <Twitter/>,
    link: {
      href: 'https://www.instagram.com/crosslifefigueira/',
      isExternalLink: true,
      ariaLabel: 'compartilhar no twitter',
    }
  }
];

const Article = () => {
  const { titleNews } = useParams();
  const {data, setData, loading, error, request} = useFetch();

  React.useEffect(()=>{
    (async () => {
      const {url, options} = NEWS_GET(titleNews);

      await request(url, options);
    })();

    return () => {
      setData();
    }
  
  }, [titleNews]);

  if(error) return <Warning title='Erro ao carregar conteúdo' description={error} isFull={true} svg='error'/>

  if(loading) return <Loading />

  if(data){
    const paragraphs = data.body.split('\n');
    
    return (
      <>
        <Head title={data.title} description={paragraphs[1]}/>
        <article className={styles.container}>
          <div className={styles.wrapper}>

            <header className={styles.header}>
              <h1 className={styles.title}>{data.title}</h1>
              {data.subtitle && <h2 className={styles.subtitle}>{data.subtitle}</h2>}
              <p>por <Link to={`/autor/${data.author.username}`} className={styles.name}>{data.author.name}</Link> - { timeInterval(data.createdAt) }</p>
            </header>

            {
              data.coverUrl &&
              <div className={styles.image}>
                <Image url={data.coverUrl} namespace={data.cover} typeStyleImage='imageSecondary'/>
              </div>
            }

            {
              paragraphs.map((paragraph, index) => (
                <p key={index} className={styles.paragraph}>{paragraph}</p>
              ))
            }

            <section className={styles.share}>
              <ListRow listItems={socialNetworksListItems} typeStyle='secondary'/>
              <Link to={`/categoria/${data.category}`} className={styles.category}>{data.category}</Link>
            </section>

            <AuthorCard name={data.author.name} username={data.author.username} description={data.author.description} avatarUrl={data.author.avatarUrl} avatar={data.author.avatar}/>
          </div>

          <Section title='mais noticias' typeStyle='primary'>
            <RelatedNews category={data.category} />
          </Section>
          
        </article>
      </>
    )
  }

  else return null;
}

export default Article;
