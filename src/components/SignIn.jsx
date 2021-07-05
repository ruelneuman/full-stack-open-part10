import React from 'react';
import * as yup from 'yup';
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
    paddingHorizontal: theme.spacing.medium,
    paddingBottom: theme.spacing.medium,
  },
});

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
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