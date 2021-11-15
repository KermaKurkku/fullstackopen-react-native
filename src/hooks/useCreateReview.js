import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-native';

import { CREATE_REVIEW } from '../graphql/queries';

const useCreateReview = () => {
	const history = useHistory();

	const [mutate, result] = useMutation(CREATE_REVIEW);

	const createReview = async ({ repositoryName, ownerName, rating, text }) => {
		const { data, error, loading } = await mutate({ variables: { 
			repositoryName, ownerName: ownerName, rating: Number(rating), text: text
		}});
		
		if (data)
      history.push('/repository/'+data.createReview.repositoryId)

		return {data, error}
	}

	return [createReview, result]
};

export default useCreateReview;