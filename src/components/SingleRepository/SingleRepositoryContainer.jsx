import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import RepositoryItem from '../RepositoryItem';
import ItemSeparator from '../ItemSeperator';
import ReviewItem from './ReviewItem';
import theme from '../../theme';

const styles = StyleSheet.create({
  header: {
    marginBottom: theme.spacing.small,
  },
});

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
      ListHeaderComponentStyle={styles.header}
    />
  );
};

export default SingleRepositoryContainer;