import React from 'react';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';

import AppBar from './AppBar';

import { Heading } from './Text';

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		flexShrink: 1,
	},
});

const Main = () => {
	return (
		<View>
			<AppBar/>
			<View style={styles.container}>
				<Heading>Rate repository Application</Heading>
				<RepositoryList/>
			</View>
		</View>
		
	);
};

export default Main;