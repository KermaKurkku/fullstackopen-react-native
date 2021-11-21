import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (variables) => {
	const { data, error, loading, fetchMore } = useQuery(GET_REPOSITORIES, {
		fetchPolicy: 'cache-and-network',
		variables: variables
	});

	const handleFetchMore = () => {
		const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

		if (!canFetchMore)
			return;

		fetchMore({
			variables: {
				after: data.repositories.pageInfo.endCursor,
				...variables,
			},
		});
	};
	return { 
		repositories: data?.repositories,
		fetchMore: handleFetchMore,
		loading, 
		error 
	};
};

export default useRepositories;