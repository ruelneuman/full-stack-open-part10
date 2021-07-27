import React from 'react';
import { FlatList } from 'react-native';

import ItemSeparator from '../ItemSeperator';
import ReviewItem from '../ReviewItem';

const UserReviewListContainer = ({ user, onEndReached }) => {
  const reviews = user?.reviews;

  const reviewNodes = reviews
    ? reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={(item) => item.id}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      renderItem={({ item }) => <ReviewItem review={item} showRepository={true} />}
    />
  );
};

export default UserReviewListContainer;