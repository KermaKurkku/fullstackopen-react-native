import { useQuery } from '@apollo/client';

import { AUTHORIZED_USER } from '../graphql/queries';


const useAuthorization = (variables) => {
	const {data, loading, fetchMore, refetch, ...result } = useQuery(AUTHORIZED_USER, {
		variables
	});

	const handleFetchMore = () => {
		const canFetchMore = !loading && data?.authorizedUser.reviews.pageInfo.hasNextPage;

		if (!canFetchMore)
			return;

		fetchMore({
			variables: {
        after: data.authorizedUser.reviews.pageInfo.endCursor,
        ...variables
      },
		});
	};
	
	return {
    data: data?.authorizedUser,
    fetchMore: handleFetchMore,
    refetch,
    loading,
    ...result
  };
};

export default useAuthorization;