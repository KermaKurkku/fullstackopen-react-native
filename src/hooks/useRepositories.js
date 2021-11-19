import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = ({ orderBy, orderDirection }) => {
	const { data, error, loading } = useQuery(GET_REPOSITORIES, {
		fetchPolicy: 'cache-and-network',
		variables: {
			orderBy,
			orderDirection
		}
	});
	return { repositories: loading ? null : data.repositories, loading, error };
};

export default useRepositories;