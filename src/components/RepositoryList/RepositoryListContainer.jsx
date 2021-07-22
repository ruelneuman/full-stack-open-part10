import React from 'react';
import { FlatList, Pressable } from 'react-native';
import { Link } from 'react-router-native';
import RepositoryItem from '../RepositoryItem';
import ItemSeparator from '../ItemSeperator';

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
        <Link
          style={({ pressed }) => ({ opacity: pressed ? 0.7 : 1 })}
          to={`/repository/${item.id}`}
          component={Pressable}
        >
          <RepositoryItem repository={item} />
        </Link>
      )}
    />
  );
};

export default RepositoryListContainer;