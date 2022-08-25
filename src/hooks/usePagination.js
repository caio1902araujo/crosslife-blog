import React from 'react';

const range = (start, end) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
}

const usePagination = () => {
  const maxVisibleButton = 5;
  const perPage = 10;

  const paginationRange =  React.useCallback(({currentPage, totalPage}) => {
    let firstPage = currentPage - Math.floor(maxVisibleButton / 2);
    let lastPage = currentPage + Math.floor(maxVisibleButton / 2);

    if(firstPage < 1) {
      firstPage = 1;
      lastPage = maxVisibleButton;
    }

    if(lastPage > totalPage) {
      firstPage = totalPage - (maxVisibleButton - 1);
      lastPage = totalPage;

      if (firstPage < 1) firstPage = 1;
    }

    return range(firstPage, lastPage);
  }, []);

  return {
    paginationRange,
    perPage
  };
}

export default usePagination;
