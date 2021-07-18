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