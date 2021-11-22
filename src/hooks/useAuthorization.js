import { useQuery } from '@apollo/client';

import { AUTHORIZED_USER } from '../graphql/queries';


const useAuthorization = (variables) => {
	const {data, loading, fetchMore, ...result } = useQuery(AUTHORIZED_USER, {
		fetchPolicy: 'cache-and-network',
		variables
	});

	const handleFetchMore = () => {
		const canFetchMore = !loading && data?.authorizedUser.reviews.pageInfo.hasNextPage

		if (!canFetchMore)
			return;

		fetchMore({
			variables: {
        after: data.authorizedUser.reviews.pageInfo.endCursor,
        ...variables
      }
		})
	}
	
	return {
    data: data?.authorizedUser,
    fetchMore: handleFetchMore,
    loading,
    ...result
  };
};

export default useAuthorization;