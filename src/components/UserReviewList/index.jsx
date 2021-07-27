import React from 'react';

import useAuthorizedUser from '../../hooks/useAuthorizedUser';
import UserReviewListContainer from './UserReviewListContainer';

const UserReviewList = () => {
  const { authorizedUser, fetchMore } = useAuthorizedUser({
    includeReviews: true,
    first: 20
  });

  const onEndReached = () => {
    fetchMore();
  };

  return (
    <UserReviewListContainer user={authorizedUser} onEndReached={onEndReached} />
  );
};

export default UserReviewList;