import React from 'react';
import { View, StyleSheet } from 'react-native';

import Text from '../Text';
import Subheading from '../Subheading';
import theme from '../../theme';

const styles = StyleSheet.create({
  reviewItemContainer: {
    backgroundColor: theme.colors.backgroundLight,
    flexDirection: 'row',
    padding: theme.spacing.medium,
  },
  ratingContainer: {
    marginRight: theme.spacing.medium,
    width: theme.iconSize.medium,
    height: theme.iconSize.medium,
    borderRadius: theme.iconSize.medium / 2,
    borderColor: theme.colors.primary,
    borderWidth: theme.borderWidth.medium,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rating: {
    color: theme.colors.primary,
  },
  reviewTextContainer: {
    flex: 1,
  },
  review: {
    marginTop: theme.spacing.small,
  }
});

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.reviewItemContainer}>
      <View style={styles.ratingContainer}>
        <Subheading style={styles.rating}>{review.rating}</Subheading>
      </View>
      <View style={styles.reviewTextContainer}>
        <Subheading>{review.user.username}</Subheading>
        <Text color="textSecondary">{review.createdAt}</Text>
        <Text style={styles.review}>{review.text}</Text>
      </View>
    </View>
  );
};

export default ReviewItem;