import { gql } from '@apollo/client';

import { REPOSITORY_DATA, REVIEW_DATA } from './fragments';

export const GET_REPOSITORIES = gql`
  query Repositories {
    repositories {
      edges {
        node {
          ...RepositoryData
        }
      }
    }
  }
  ${REPOSITORY_DATA}
`;

export const GET_REPOSITORY = gql`
  query Repository($id: ID!) {
    repository(id: $id) {
        ...RepositoryData
        reviews {
          edges {
            node {
              ...ReviewData
            }
          }
        }
    }
  }
  ${REPOSITORY_DATA}
  ${REVIEW_DATA}
`;

export const GET_AUTHORIZED_USER = gql`
  query AuthorizedUser {
    authorizedUser {
      id
      username
    }
  }
`;