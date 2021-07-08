import { useMutation } from '@apollo/client';

import { AUTHORIZE } from '../graphql/mutations';

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHORIZE);

  const signIn = async ({ username, password }) => {
    const mutationResult = await mutate({
      variables: { credentials: { username, password } },
    });

    return mutationResult;
  };

  return [signIn, result];
};

export default useSignIn;