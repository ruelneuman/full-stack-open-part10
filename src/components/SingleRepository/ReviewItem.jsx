import React from 'react';
import { View, Text } from 'react-native';

const ReviewItem = ({ review }) => {
  return (
    <View>
      <Text>{review.rating}</Text>
      <Text>{review.user.username}</Text>
      <Text>{review.createdAt}</Text>
      <Text>{review.text}</Text>
    </View>
  );
};

export default ReviewItem;