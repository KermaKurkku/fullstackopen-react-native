import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { Link } from 'react-router-native'

import Text from '../Text';

const style = StyleSheet.create({
	item: {
		flexGrow: 0,
		padding: 20,
		borderRadius: 10,
	},
});

export const AppBarItem = ({to, children}) => {
	return (
			<Link to={to} style={style.item}>
				<Text fontWeight='bold' fontSize='subheading' color='textInverted'>{children}</Text>
			</Link>
	);
};

export default AppBarItem;