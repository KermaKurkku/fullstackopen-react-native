import React from 'react';
import { StyleSheet, Pressable, View } from 'react-native';
import { Formik } from 'formik';

import Text from './Text'
import { FormikTextInput } from './TextInput';
import theme from '../theme';

const initialValues = {
	username: '',
	password: '',
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

const onSubmit = (values) => {
	console.log(values);
};

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
	return (
		<>
			<Formik initialValues={initialValues} onSubmit={onSubmit}>
				{({handleSubmit}) => <InputBlock onSubmit={handleSubmit} />}			
			</Formik>
			
		</>
	)
};

export default SignIn;