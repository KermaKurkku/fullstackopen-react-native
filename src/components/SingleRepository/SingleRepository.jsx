import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import { RepositoryContainer } from '../RepositoryList';
//import { ItemSeparator } from '../RepositoryList/RepositoryList';
import { Text } from '../Text';
import useRepository from '../../hooks/useRepository';
import { useParams } from 'react-router-native';
import theme from '../../theme';

const styles = StyleSheet.create({
	background: {
		backgroundColor: theme.colors.separatorBack,
		height: '100%',
	}
})

const SingleRepository = () => {
	const {id} = useParams();
	const { repository } = useRepository(id);

	const reviews = repository ? repository.reviews.edges.map(review => review.node)
		: [];
	console.log(reviews)
	return (
		<>
			{repository ?	
			<View style={styles.background}>
				<RepositoryContainer item={repository} single={true} />
				<FlatList 
					data={reviews}
				/>
			</View>
				: null }
		</>
	);
};

export default SingleRepository;
