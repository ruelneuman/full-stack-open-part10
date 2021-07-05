import React from 'react';
import { View, StyleSheet } from 'react-native';
import StatisticsContainer from './StatisticsContainer';
import InfoContainer from './InfoContainer';

const styles = StyleSheet.create({
  repositoryContainer: {
    backgroundColor: 'white',
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.repositoryContainer}>
      <InfoContainer
        fullName={item.fullName}
        description={item.description}
        language={item.language}
        avatarUrl={item.ownerAvatarUrl}
      />
      <StatisticsContainer
        starCount={item.stargazersCount}
        forksCount={item.forksCount}
        reviewCount={item.reviewCount}
        rating={item.ratingAverage}
      />
    </View>
  );
};

export default RepositoryItem;