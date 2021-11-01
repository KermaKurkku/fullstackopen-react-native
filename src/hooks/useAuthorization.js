import { useQuery } from '@apollo/client';

import { AUTHORIZED_USER } from '../graphql/queries';


const useAuthorization = () => {
	const {data, error, loading } = useQuery(AUTHORIZED_USER);
	
	return { data: data ? data.authorizedUser : null, error, loading };
};

export default useAuthorization;