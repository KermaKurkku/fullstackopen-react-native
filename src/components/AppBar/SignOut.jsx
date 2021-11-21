import React from 'react';
import { Pressable } from 'react-native';
import useSignOut from '../../hooks/useSignOut';
import { StyleSheet } from 'react-native';


import Text from '../Text';

const style = StyleSheet.create({
	item: {
		flexGrow: 0,
		padding: 20,
		borderRadius: 10,
	},
});

const SignOut = () => {
	const [signOut] = useSignOut();

	const onPressFunc = () => {
		signOut();
	}

	return (
		<Pressable onPress={onPressFunc} style={style.item}>
			<Text fontWeight='bold' fontSize='subheading' color='textInverted'>
				Sign out
			</Text>
		</Pressable>
	)
}

export default SignOut;