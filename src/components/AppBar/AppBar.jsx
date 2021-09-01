import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
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
				<AppBarItem to='/'>Repositories</AppBarItem>
				<AppBarItem to='/signIn'>Sign in</AppBarItem>
		</View>
	);
};

export default AppBar;