import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-native';

import { CREATE_USER } from '../graphql/mutations';

const useCreateUser = () => {
	const history = useHistory();
	const [mutate, result] = useMutation(CREATE_USER);

	const createUser = async ({ username, password }) => {
		const { data, error, loading } = await mutate({ variables: {
			username, password
		}});

		if (data)
			history.push('/');

		return {data, error};
	}
  
  return [createUser, result];
}

export default useCreateUser;