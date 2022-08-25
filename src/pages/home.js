import React from 'react';
import Intro from '../components/intro/intro';
import Section from '../components/section/section';

const Home = () => {
  return (
    <>
      <Intro title='crosslife news' 
        description='Se increva para fazer parte da comunidade crosslife e acelere em direção aos seus objetivos com notícias e dicas'
        textButton='inscreva-se'
        typeStyle='primary'
      />

      <Section title="mais lidas" typeStyle="primary" typeGridNews="mostReadNews"/>

      <Section title="notícias" typeStyle="secondary" typeGridNews="allNews"/>
    </>
  );
};

export default Home;
