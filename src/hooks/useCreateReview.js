import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-native';

import { CREATE_REVIEW } from '../graphql/queries';

const useCreateReview = () => {
	const history = useHistory();

	const [mutate, result] = useMutation(CREATE_REVIEW);

	const createReview = async ({ repositoryName, ownerName, rating, text }) => {
		console.log('yeet')
		const { data, error, loading } = await mutate({ variables: { 
			repositoryName: repositoryName, ownerName, rating: rating, text: text
		}})
		console.log(data)

		return {data, error}
	}

	return [createReview, result]
};

export default useCreateReview;