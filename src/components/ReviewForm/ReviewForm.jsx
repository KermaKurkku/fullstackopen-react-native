import React, {useState} from 'react';
import { StyleSheet, Pressable, View } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import Text from '../Text';
import { FormikTextInput } from '../TextInput';
import theme from '../../theme';

import useCreateReview from '../../hooks/useCreateReview';

const validationSchema = yup.object().shape({
	ownerName: yup
		.string()
		.required('Repository owner name is required'),
	repositoryName: yup
		.string()
		.required('Repository name is required'),
	rating: yup
		.number()
		.min(0)
		.max(100)
		.required('Rating is required'),
	review: yup
		.string()
	
});

const initialValues = {
	repositoryName: '',
	ownerName: '',
	rating: '',
	review: '',
}

const style = StyleSheet.create({
	inputStyle: {
		borderWidth: 1,
		borderColor: theme.colors.textSecondary,
		borderRadius: 5,
		padding: 10,
		margin: 10,
	},
	buttonWrapper: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 10,
	},
	createReviewButton: {
		display: 'flex',
		alignItems: 'center',
		backgroundColor: theme.colors.primary,
		padding: 15,
		borderRadius: 5,
		flexGrow: 1,
		alignSelf: 'center',
	},
  errorWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2
  },
	errorStyle: {
		alignContent: 'center',
		color: 'red'
	}
});

const ReviewInputs = ({ onSubmit }) => {
	return (
		<Formik
      validationSchema={validationSchema}
			initialValues={initialValues}
			onSubmit={onSubmit}
    >
      {({handleSubmit}) => 
        <>
          <FormikTextInput
            name='repositoryName'
            placeholder='Repository name'
            style={style.inputStyle}
            testID='RepoNameField'
          />
          <FormikTextInput
            name='ownerName'
            placeholder='Repository owner name'
            style={style.inputStyle}
            testID="RepoOwnerField"
          />
          <FormikTextInput
            name='rating'
            placeholder='Rating between 0 and 100'
            style={style.inputStyle}
            testID='RatingField'
          />
          <FormikTextInput
            name='review'
            placeholder='Review'
            style={style.inputStyle}
						multiline={true}
            testID='ReviewField'
          />
          <View style={style.buttonWrapper}>
            <Pressable 
							style={style.createReviewButton}
							onPress={handleSubmit}
						>
              <Text
                fontWeight='bold'
                color='textInverted'
              >Create a review</Text>
            </Pressable>
          </View>
        </>
      }
    </Formik>
	);
};

const ReviewForm = () => {
	const [createReview] = useCreateReview();
  const [error, setError] = useState(null);

	const onSubmit = async (values) => {
		const { repositoryName, ownerName, rating, review } = values;

		try {
			await createReview({
				repositoryName, ownerName, rating, text: review
			});
		} catch (e) {
			console.log(JSON.stringify(e, null,2))
      setError(e.message)
      setTimeout(() => setError(null), 5000);
		}
	};

	return ( 
    <>
      {error ?
        <View style={style.errorWrapper}>
          <Text style={style.errorStyle}>{error}</Text>
        </View>
        : null
      }
		  <ReviewInputs onSubmit={onSubmit} />
    </>
	)
}

export default ReviewForm;