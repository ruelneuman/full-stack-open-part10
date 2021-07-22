import React, { useState } from 'react';
import useRepositories, { getUseRepositoryOptions } from '../../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';

const RepositoryList = () => {
  const [sortType, setSortType] = useState('most-recent');

  const options = getUseRepositoryOptions(sortType);

  const { repositories } = useRepositories(options);

  return (
    <RepositoryListContainer
      repositories={repositories}
      sortType={sortType}
      setSortType={setSortType}
    />
  );
};

export default RepositoryList;