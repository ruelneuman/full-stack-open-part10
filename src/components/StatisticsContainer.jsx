import React from 'react';
import { View, StyleSheet } from 'react-native';
import StatisticsItem from './StatisticsItem';
import theme from '../theme';

const styles = StyleSheet.create({
  statistics: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: theme.margin.medium,
  },
});

const StatisticsContainer = ({ starCount, reviewCount, forksCount, rating }) => {
  return (
    <View style={styles.statistics}>
      <StatisticsItem
        statistic={starCount}
        description="Stars"
      />
      <StatisticsItem
        statistic={forksCount}
        description="Forks"
      />
      <StatisticsItem
        statistic={reviewCount}
        description="Reviews"
      />
      <StatisticsItem
        statistic={rating}
        description="Rating"
      />
    </View>
  );
};

export default StatisticsContainer;