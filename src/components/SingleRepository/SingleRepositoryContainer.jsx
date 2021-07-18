import React from 'react';
import { FlatList } from 'react-native';

import RepositoryItem from '../RepositoryItem';
import ItemSeparator from '../ItemSeperator';
import ReviewItem from './ReviewItem';

const SingleRepositoryContainer = ({ repository }) => {
  const reviews = repository?.reviews;

  const reviewNodes = reviews
    ? reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ReviewItem review={item} />}
      ListHeaderComponent={() => repository ? <RepositoryItem repository={repository} /> : null}
    />
  );
};

export default SingleRepositoryContainer;