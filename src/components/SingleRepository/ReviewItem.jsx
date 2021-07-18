import React from 'react';
import { View, StyleSheet } from 'react-native';

import Text from '../Text';
import Subheading from '../Subheading';
import theme from '../../theme';

const styles = StyleSheet.create({
  reviewContainer: {
    backgroundColor: theme.colors.backgroundLight,
  },
  rating: {
    color: theme.colors.primary,
  },
});

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.reviewContainer}>
      <Subheading style={styles.rating}>{review.rating}</Subheading>
      <Subheading>{review.user.username}</Subheading>
      <Text color="textSecondary">{review.createdAt}</Text>
      <Text>{review.text}</Text>
    </View>
  );
};

export default ReviewItem;