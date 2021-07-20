import React from 'react';
import { useHistory } from 'react-router-native';
import { useMutation } from '@apollo/client';

import AddReviewContainer from './AddReviewContainer';
import { CREATE_REVIEW } from '../../graphql/mutations';

const AddReview = () => {
  const [createReview, { error }] = useMutation(CREATE_REVIEW);

  const history = useHistory();

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, review } = values;
    try {
      const { data } = await createReview({
        variables: {
          review: {
            ownerName,
            repositoryName,
            rating: Number(rating),
            text: review
          }
        },
      });

      if (data?.createReview) {
        history.push(`/repository/${data.createReview.repositoryId}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return <AddReviewContainer onSubmit={onSubmit} error={error} />;
};

export default AddReview;