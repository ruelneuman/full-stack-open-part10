import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
 textInput: {
   borderColor: theme.colors.details,
   borderWidth: 1,
   borderRadius: theme.radius.medium,
   padding: theme.spacing.small,
   marginBottom: theme.spacing.medium,
 },
});

// eslint-disable-next-line no-unused-vars
const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.textInput, style];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;