import { useApolloClient } from '@apollo/client';
import { useHistory } from 'react-router-native';

import useAuthStorage from './useAuthStorage';

const useSignOut = () => {
	const authStorage = useAuthStorage();
	const apolloClient = useApolloClient();
	const history = useHistory();
	const signOut = () => {
		authStorage.removeAccessToken();
		apolloClient.resetStore();
	};

	return [ signOut ];

};

export default useSignOut;