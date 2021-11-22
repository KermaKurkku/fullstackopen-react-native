import { useMutation } from "@apollo/client";

import { DELETE_REVIEW } from "../graphql/mutations";

const useDeleteReview = () => {
	const [mutate, result] = useMutation(DELETE_REVIEW);

	const deleteReview = async ({ id }) => {
		const {data, error } = await mutate({ variables: {
			id
		}});

		return { data, error };
	};

	return [deleteReview, result];
};

export default useDeleteReview;