import { gql } from '@apollo/client';

import { REPOSITORY_DATA, REVIEW_DATA, PAGE_INFO_DATA } from './fragments';

export const GET_REPOSITORIES = gql`
  query Repositories(
    $orderBy: AllRepositoriesOrderBy, 
    $orderDirection: OrderDirection,
    $searchKeyword: String,
    $first: Int,
    $after: String,
    ) {
    repositories(
      orderBy: $orderBy, 
      orderDirection: $orderDirection,
      searchKeyword: $searchKeyword,
      first: $first,
      after: $after
      ) {
      edges {
        node {
          ...RepositoryData
        }
        cursor
      }
      pageInfo {
        ...PageInfoData
      }
    }
  }
  ${REPOSITORY_DATA}
  ${PAGE_INFO_DATA}
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