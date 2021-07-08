import React from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import { View, StyleSheet } from 'react-native';

import useSignIn from '../hooks/useSignIn';
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
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ handleSubmit }) => (
          <View style={styles.form}>
            <FormikTextInput name="username" placeholder="Username" autoCapitalize="none" />
            <FormikTextInput name="password" placeholder="Password" secureTextEntry />
            <Button onPress={handleSubmit} title="Sign In" />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default SignIn;