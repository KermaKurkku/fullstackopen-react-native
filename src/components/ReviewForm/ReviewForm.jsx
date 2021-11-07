import React from 'react';
import { StyleSheet, Pressable, View } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import Text from '../Text';
import { FormikTextInput } from '../TextInput';
import theme from '../../theme';

const validationSchema = yup.object().shape({
	repoOwner: yup
		.string()
		.required('Repository owner name is required'),
	repoName: yup
		.string()
		.required('Repository name is required'),
	rating: yup
		.number()
		.min(0)
		.max(100)
		.required('Rating is required'),
	review: yup
		.string()
	
})

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
});

const ReviewForm = () => {
	return (
		<Formik
      validationSchema={validationSchema}
    >
      {({handleSubmit}) => 
        <>
          <FormikTextInput
            name='RepositoryOwner'
            placeholder='Repository owner name'
            style={style.inputStyle}
            testID='RepoOwnerField'
          />
          <FormikTextInput
            name='RepositoryName'
            placeholder='Repository name'
            style={style.inputStyle}
            testID="RepoNameField"
          />
          <FormikTextInput
            name='Rating'
            placeholder='Rating between 0 and 100'
            style={style.inputStyle}
            testID='RatingField'
          />
          <FormikTextInput
            name='Review'
            placeholder='Review'
            style={style.inputStyle}
            testID='ReviewField'
          />
          <View style={style.buttonWrapper}>
            <Pressable style={style.createReviewButton}>
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

export default ReviewForm;