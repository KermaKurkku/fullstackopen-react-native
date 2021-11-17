import React, { useState } from 'react';
import { StyleSheet, Pressable, View } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import Text from '../Text';
import { FormikTextInput } from '../TextInput';
import theme from '../../theme';

import useCreateUser from '../../hooks/useCreateUser';

const validationSchema = yup.object().shape({
	username: yup
		.string()
    .min(1, 'Username must be at least 1 letter long')
    .max(30, 'Username must not be over 30 letters long')
		.required('Username is required'),
	password: yup
		.string()
    .min(5, 'Password must be a minimum of 5 letters')
    .max(50, 'Password cannot be longer than 50 letters')
		.required('Password is required'),
	passwordConf: yup
    .string()
		.oneOf([yup.ref('password'), null], 'Password does not match')
		.required('Password confirmation is required')
});

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
	signUpButton: {
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

const SingUpForm = ({ onSubmit }) => {
  const initialValues = {
    username: '',
    password: '',
    passwordConf: ''
  }
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {({handleSubmit}) =>
        <>
          <FormikTextInput 
            name='username'
            placeholder='Username'
            style={style.inputStyle}
            testID='UsernameField'
          />
          <FormikTextInput
            name='password'
            placeholder='Password'
            style={style.inputStyle}
            secureTextEntry={true}
            testID='PasswordField'
          />
          <FormikTextInput
            name='passwordConf'
            placeholder='Password confirmation'
            style={style.inputStyle}
            secureTextEntry={true}
            testID='PasswordConfField'
          />
          <View style={style.buttonWrapper}>
            <Pressable
              style={style.signUpButton}
              onPress={handleSubmit}
            >
              <Text
                fontWeight='bold'
                color='textInverted'
              >Sign up</Text>
            </Pressable>
          </View>
        </>
      }
    </Formik>
  );
};

const SignUp = () => {
  const [error, setError] = useState(null);
  const [createUser] = useCreateUser();

  const onSubmit = async (values) => {
    const { username, password, passwordConf } = values;
    console.log(values)
    if (password !== passwordConf) { 
      setError('Passwords didn\'t match')
      return
    }

    try {
      const {data} = await createUser({ username, password});
    } catch (e) {
      setError(e.message);
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
      <SingUpForm onSubmit={onSubmit} />
    </>
  );
};

export default SignUp;
