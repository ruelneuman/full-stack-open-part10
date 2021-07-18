import { gql } from "@apollo/client";

export const REPOSITORY_DATA = gql`
  fragment RepositoryData on Repository {
    id
    fullName
    ratingAverage
    reviewCount
    stargazersCount
    forksCount
    ownerAvatarUrl
    description
    language
    url
  }
`;

export const REVIEW_DATA = gql`
  fragment ReviewData on Review {
    id
    text
    rating
    createdAt
    user {
      id
      username
    }
  }
`;