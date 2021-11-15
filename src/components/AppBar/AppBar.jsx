import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';

import AppBarItem from './AppBarItem';
import SignOut from './SignOut';

import useAuthorization from '../../hooks/useAuthorization';


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
	const { data, error, loading } = useAuthorization();
	return (
		<View style={styles.container}>
				<ScrollView horizontal>
					<AppBarItem to='/'>Repositories</AppBarItem>
					{data == null ? null : <AppBarItem to='/createReview'>Create a review</AppBarItem>}
					{data == null ? <AppBarItem to='/signIn'>Sign in</AppBarItem>
						:	<SignOut/>}
				</ScrollView>
		</View>
	);
};

export default AppBar;