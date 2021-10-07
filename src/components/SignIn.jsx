import React from 'react';
import { StyleSheet, Pressable, View } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import Text from './Text'
import { FormikTextInput } from './TextInput';
import theme from '../theme';
import useSignIn from '../hooks/useSignIn';

const initialValues = {
	username: '',
	password: '',
}

const validationSchema = yup.object().shape({
	username:yup
		.string()
		.required('Username is required'),
	password: yup
		.string()
		.required('Password is required'),
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
	signInButton: {
		display: 'flex',
		alignItems: 'center',
		backgroundColor: theme.colors.primary,
		padding: 15,
		borderRadius: 5,
		flexGrow: 1,
		alignSelf: 'center',
	},
});

const InputBlock = ({ onSubmit }) => {
	return (
		<>
			<FormikTextInput 
					name="username"
					placeholder="Username"
					style={style.inputStyle}
				/>
				<FormikTextInput
					name="password"
					placeholder="Password"
					style={style.inputStyle}
					secureTextEntry={true}
				/>
				<View style={style.buttonWrapper}>
					<Pressable style={style.signInButton} onPress={onSubmit}>
						<Text fontSize='subheading' color='textInverted' fontWeight='bold'>Sign in</Text>
					</Pressable>
				</View>
		</>
	);
};

const SignIn = () => {
	const [signIn] = useSignIn();

	const onSubmit = async (values) => {
		const { username, password } = values
		try {
			const { data } = await signIn({ username, password });
			console.log(data);
		} catch (e) {
			console.log(e.message);
		}
	};
	return (
		<>
			<Formik 
				initialValues={initialValues}
				onSubmit={onSubmit}
				validationSchema={validationSchema}
			>
				{({handleSubmit}) => <InputBlock onSubmit={handleSubmit} />}			
			</Formik>
			
		</>
	)
};

export default SignIn;