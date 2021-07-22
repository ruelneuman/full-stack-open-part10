import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = ({ orderBy, orderDirection }) => {

  const { data, error, loading, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: { orderBy, orderDirection },
  });

  const repositories = data?.repositories;

  return { repositories, error, loading, refetch };
};

export const getUseRepositoryOptions = (sortType) => {
  switch (sortType) {
    case 'most-recent':
      return {
        orderBy: 'CREATED_AT',
        orderDirection: 'DESC',
      };
    case 'highest-rated':
      return {
        orderBy: 'RATING_AVERAGE',
        orderDirection: 'DESC',
      };
    case 'lowest-rated':
      return {
        orderBy: 'RATING_AVERAGE',
        orderDirection: 'ASC',
      };
    default:
      return {};
  }
};

export default useRepositories;