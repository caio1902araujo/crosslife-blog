import React from 'react';
import SearchDetails from '../components/searchDetails/searchDetails';
import Section from '../components/section/section';

const Search = () => {
  return (
    <>
      <SearchDetails />
      <Section typeStyle="primary" typeGridNews="allNews"/>
    </>
  );
};

export default Search;
