import React from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import { View, StyleSheet } from 'react-native';

import FormikTextInput from '../FormikTextInput';
import Button from '../Button';
import Text from '../Text';
import theme from '../../theme';

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
  ownerName: '',
  repositoryName: '',
  rating: '',
  review: '',
};

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .required('Repository owner name is required'),
  repositoryName: yup
    .string()
    .required('Repository name is required'),
  rating: yup
    .number()
    .typeError('Rating must be a number')
    .integer('Rating must be an integer')
    .min(0, 'Minimum rating is 0')
    .max(100, 'Maximum rating is 100')
    .required('Rating is required'),
  review: yup
    .string()
});

const AddReviewContainer = ({ onSubmit, error }) => {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ handleSubmit }) => (
          <View style={styles.form}>
            <FormikTextInput
              name="ownerName"
              placeholder="Repository owner name"
              autoCapitalize="none"
            />
            <FormikTextInput
              name="repositoryName"
              placeholder="Repository name"
              autoCapitalize="none"
            />
            <FormikTextInput
              name="rating"
              placeholder="Rating between 0 and 100"
              autoCapitalize="none"
              keyboardType="numeric"
            />
            <FormikTextInput
              name="review"
              placeholder="Review"
              multiline
            />
            <Button
              onPress={handleSubmit}
              title="Add a Review"
            />
            {error && <Text style={styles.errorText}>{error.message}</Text>}
          </View>
        )}
      </Formik>
    </View>
  );
};

export default AddReviewContainer;