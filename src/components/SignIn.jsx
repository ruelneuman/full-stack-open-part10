import React from 'react';
import { Formik } from 'formik';
import { View, StyleSheet } from 'react-native';

import FormikTextInput from './FormikTextInput';
import Button from './Button';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
  },
  form: {
    backgroundColor: theme.colors.backgroundLight,
    padding: theme.spacing.medium,
  },
});

const initialValues = {
  username: '',
  password: '',
};

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleSubmit }) => (
          <View style={styles.form}>
            <FormikTextInput name="username" placeholder="Username" />
            <FormikTextInput name="password" placeholder="Password" secureTextEntry />
            <Button onPress={handleSubmit} title="Sign In" />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default SignIn;