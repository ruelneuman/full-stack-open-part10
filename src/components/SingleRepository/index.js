import React from 'react';
import { View } from 'react-native';
import { useParams } from 'react-router-native';

import useRepository from '../../hooks/useRepository';
import RepositoryItem from '../RepositoryItem';

const SingleRepository = () => {
  const { id } = useParams();

  const { repository } = useRepository(id);

  return (
    <View>
      {repository && <RepositoryItem repository={repository} showLink />}
    </View>
  );
};

export default SingleRepository;