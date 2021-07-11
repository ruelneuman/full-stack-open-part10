import React from 'react';
import { FlatList } from 'react-native';
import RepositoryItem from '../RepositoryItem';
import ItemSeparator from './ItemSeperator';

const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <RepositoryItem item={item} />
      )}
    />
  );
};

export default RepositoryListContainer;