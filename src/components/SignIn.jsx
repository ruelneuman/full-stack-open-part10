import React from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import { View, StyleSheet } from 'react-native';
import { useHistory } from "react-router-native";

import useSignIn from '../hooks/useSignIn';
import FormikTextInput from './FormikTextInput';
import Button from './Button';
import Text from './Text';
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
  errorText: {
    color: theme.colors.error,
    marginTop: theme.spacing.tiny,
  }
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
  const [signIn, { error }] = useSignIn();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signIn({ username, password });
      history.push('/');
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
            {error && <Text style={styles.errorText}>{error.message}</Text>}
          </View>
        )}
      </Formik>
    </View>
  );
};

export default SignIn;