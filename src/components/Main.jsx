import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import RepositoryList from './RepositoryList';

import AppBar from './AppBar';

import Heading from './Textual/Heading';

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		flexShrink: 1,
	},
});

const Main = () => {
	return (
		<View>
			<AppBar>
				<Pressable onClick={() => console.log('test')}>
					<Text>Test</Text>
				</Pressable>
			</AppBar>
			<View style={styles.container}>
				<Heading>Rate repository Application</Heading>
				<RepositoryList/>
			</View>
		</View>
		
	);
};

export default Main;