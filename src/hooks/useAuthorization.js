import { useQuery } from '@apollo/client';

import { AUTHORIZED_USER } from '../graphql/queries';


const useAuthorization = () => {
	const {data, error, loading } = useQuery(AUTHORIZED_USER);
	console.log(data, loading)

	return { data: data.authorizedUser, error, loading };
}

export default useAuthorization;