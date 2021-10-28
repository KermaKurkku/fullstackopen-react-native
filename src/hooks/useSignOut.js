import { useApolloClient } from '@apollo/client';

import useAuthStorage from './useAuthStorage';

const useSignOut = () => {
	const authStorage = useAuthStorage();
	const apolloClient = useApolloClient();
	const signOut = () => {
		authStorage.removeAccessToken();
		apolloClient.resetStore();
	};

	return [ signOut ];

};

export default useSignOut;