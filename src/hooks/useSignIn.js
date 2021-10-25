import { useApolloClient, useMutation } from '@apollo/client';
import { useHistory } from 'react-router-native';

import { SIGN_IN } from '../graphql/queries';

import useAuthStorage from './useAuthStorage';

const useSignIn = () => {
	const authStorage = useAuthStorage();
	const apolloClient = useApolloClient();
	const history = useHistory();
	const [mutate, result] = useMutation(SIGN_IN);

	const signIn = async ({ username, password }) => {
		const { data } = await mutate({ variables: { username: username, password: password } });
		await authStorage.setAccessToken(data.authorize.accessToken);
		apolloClient.resetStore();
		history.push('/');
		return { data : data.authorize};
	}

	return [signIn , result];
}

export default useSignIn;