import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = ({ orderBy, orderDirection, searchKeyword }) => {

  const { data, error, loading, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: { orderBy, orderDirection, searchKeyword },
  });

  const repositories = data?.repositories;

  return { repositories, error, loading, refetch };
};

export const getUseRepositoryOptions = (sortType, searchKeyword) => {
  switch (sortType) {
    case 'most-recent':
      return {
        orderBy: 'CREATED_AT',
        orderDirection: 'DESC',
        searchKeyword,
      };
    case 'highest-rated':
      return {
        orderBy: 'RATING_AVERAGE',
        orderDirection: 'DESC',
        searchKeyword,
      };
    case 'lowest-rated':
      return {
        orderBy: 'RATING_AVERAGE',
        orderDirection: 'ASC',
        searchKeyword,
      };
    default:
      return { searchKeyword };
  }
};

export default useRepositories;