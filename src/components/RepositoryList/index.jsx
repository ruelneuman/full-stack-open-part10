import React, { useState } from 'react';
import useRepositories, { getSortVariables } from '../../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';

const RepositoryList = () => {
  const [sortType, setSortType] = useState('most-recent');
  const [searchKeyword, setSearchKeyword] = useState('');

  const variables = { searchKeyword, first: 20, ...getSortVariables(sortType) };

  const { repositories, fetchMore } = useRepositories(variables);

  const onEndReached = () => {
    fetchMore();
  };

  return (
    <RepositoryListContainer
      repositories={repositories}
      sortType={sortType}
      setSortType={setSortType}
      searchKeyword={searchKeyword}
      setSearchKeyword={setSearchKeyword}
      onEndReached={onEndReached}
    />
  );
};

export default RepositoryList;