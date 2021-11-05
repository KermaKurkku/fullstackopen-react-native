import React, { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import theme from '../../theme';
import RepositoryListItem from './RepositoryListItem';

import { useHistory } from 'react-router-native';
import useRepositories from '../../hooks/useRepositories';

const styles = StyleSheet.create({
	separator: {
		height: 10,
		backgroundColor: theme.colors.separatorBack,
	},
});

export const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, history }) => {
	const repositoryNodes = repositories
		? repositories.edges.map(edge => edge.node)
    : [];
	return (
		<FlatList
			data={repositoryNodes}
			ItemSeparatorComponent={ItemSeparator}
			renderItem={(item) => <RepositoryListItem item={item.item} history={history} />}
			keyExtractor={repo => repo.id}
		/>
	);
};

const RepositoryList= () => {
	const { repositories } = useRepositories();
	const history = useHistory();

	return <RepositoryListContainer repositories={repositories} history={history} />;
};

export default RepositoryList;