import React from 'react';
import { View, StyleSheet } from 'react-native';

import { RepositoryContainer } from '../RepositoryList';

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
	return (
		<>
			{repository ?	
			<View style={styles.background}>
				<RepositoryContainer item={repository} single={true} />
			</View>
				: null }
		</>
	);
};

export default SingleRepository;
