import React from 'react';
import FormSearch from '../components/formSearch/formSearch';
import Section from '../components/section/section';

const Search = () => {
  return (
    <>
      <FormSearch handleSubmit={(event) => event.preventDefault()} typeStyle='primary' />
      <Section styleSection="sectionPrimary" typeGridNews="allNews"/>
    </>
  );
};

export default Search;
