import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
	container: {
		paddingTop: Constants.statusBarHeight,
	},
});

const AppBar = (props) => {
	return <View style={styles.container} {...props}/>;
};

export default AppBar;