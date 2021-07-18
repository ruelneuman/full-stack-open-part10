import React from 'react';
import { useParams } from 'react-router-native';

import useRepository from '../../hooks/useRepository';
import SingleRepositoryContainer from './SingleRepositoryContainer';

const SingleRepository = () => {
  const { id } = useParams();

  const { repository } = useRepository(id);

  return (
    <SingleRepositoryContainer repository={repository}/>
  );
};

export default SingleRepository;