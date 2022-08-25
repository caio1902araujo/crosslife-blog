import React from 'react';
import Intro from '../components/intro/intro';
import Section from '../components/section/section';

const CategoryNews = () => {
  return (
    <>
      <Intro title='academia' 
        description='Se increva para fazer parte da comunidade crosslife e acelere em direção aos seus objetivos com notícias e dicas'
        typeStyle='secondary'
      />

      <Section typeStyle="primary" typeGridNews="allNews"/>
    </>
  );
};

export default CategoryNews;
