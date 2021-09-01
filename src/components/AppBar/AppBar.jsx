import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AppBarItem from './AppBarItem';


import theme from '../../theme';

const styles = StyleSheet.create({
	container: {
		paddingTop: Constants.statusBarHeight,
		backgroundColor: theme.colors.appBar,
		display: 'flex',
		flexDirection: 'row',
	},
});

const AppBar = () => {
	return (
		<View style={styles.container}>
			<AppBarItem>Repositories</AppBarItem>
		</View>
	);
};

export default AppBar;