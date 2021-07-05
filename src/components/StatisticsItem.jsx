import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  statisticsItem: {
    alignItems: 'center',
  },
});

const StatisticsItem = ({ statistic, description }) => {
  const round = (number) => {
    return Math.round(number * 10) / 10;
  };

  return (
    <View style={styles.statisticsItem}>
      <Text fontWeight="bold">
        {statistic < 1000
          ? statistic
          : round(statistic / 1000) + 'k'}
      </Text>
      <Text color="textSecondary">{description}</Text>
    </View>
  );
};

export default StatisticsItem;