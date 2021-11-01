import React, { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import theme from '../../theme';
import RepositoryItem from './RepositoryItem';

import useRepositories from '../../hooks/useRepositories';

const styles = StyleSheet.create({
	separator: {
		height: 10,
		backgroundColor: theme.colors.separatorBack,
	},
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories }) => {
	const repositoryNodes = repositories
		? repositories.edges.map(edge => edge.node)
    : [];

	return (
		<FlatList
			data={repositoryNodes}
			ItemSeparatorComponent={ItemSeparator}
			renderItem={RepositoryItem}
			keyExtractor={repo => repo.id}
		/>
	);
};

const RepositoryList= () => {
	const { repositories } = useRepositories();

	return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;