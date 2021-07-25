import React, { useState } from 'react';
import useRepositories, { getUseRepositoryOptions } from '../../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';

const RepositoryList = () => {
  const [sortType, setSortType] = useState('most-recent');
  const [searchKeyword, setSearchKeyword] = useState('');

  const options = getUseRepositoryOptions(sortType, searchKeyword);

  const { repositories } = useRepositories(options);

  return (
    <RepositoryListContainer
      repositories={repositories}
      sortType={sortType}
      setSortType={setSortType}
      searchKeyword={searchKeyword}
      setSearchKeyword={setSearchKeyword}
    />
  );
};

export default RepositoryList;