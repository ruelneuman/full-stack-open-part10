import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Link } from "react-router-native";

import Subheading from './Subheading';
import theme from '../theme';

const styles = StyleSheet.create({
  tab: {
    padding: theme.padding.medium,
  },
});

const AppBarTab = ({ text, url }) => {
  return (
    <Link
      to={url}
      component={Pressable}
      style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }, styles.tab]}
    >
      <Subheading color="textLight">
        {text}
      </Subheading>
    </Link>
  );
};

export default AppBarTab;