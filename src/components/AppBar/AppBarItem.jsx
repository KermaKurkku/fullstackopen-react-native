import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';

import Text from '../Text';

const style = StyleSheet.create({
	item: {
		flexGrow: 0,
		padding: 20,
	},
});

export const AppBarItem = (props) => {
	return (
		<View style={style.item}>
			<Pressable onPress={() => console.log('test')}>
				<Text fontWeight='bold' fontSize='subheading' color='textInverted' {...props}/>
			</Pressable>
			
		</View>
	);
};

export default AppBarItem;