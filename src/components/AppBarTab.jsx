import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  tab: {
    marginRight: theme.fontSizes.subheading,
  }
});

const AppBarTab = ({ text }) => {
  return (
    <Pressable style={styles.tab}>
      <Text color="textLight" fontWeight="bold" fontSize="subheading">
        {text}
      </Text>
    </Pressable>
  );
};

export default AppBarTab;