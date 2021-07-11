import React from 'react';
import { View, StyleSheet } from 'react-native';

import StatisticsContainer from './StatisticsContainer';
import InfoContainer from './InfoContainer';
import theme from '../../theme';

const styles = StyleSheet.create({
  repositoryContainer: {
    backgroundColor: theme.colors.backgroundLight,
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.repositoryContainer}>
      <InfoContainer
        fullName={item.fullName}
        description={item.description}
        language={item.language}
        ownerAvatarUrl={item.ownerAvatarUrl}
      />
      <StatisticsContainer
        stargazersCount={item.stargazersCount}
        forksCount={item.forksCount}
        reviewCount={item.reviewCount}
        ratingAverage={item.ratingAverage}
      />
    </View>
  );
};

export default RepositoryItem;