import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import { RepositoryContainer } from '../RepositoryList';
import { ItemSeparator } from '../RepositoryList/RepositoryList';
import useRepository from '../../hooks/useRepository';
import { useParams } from 'react-router-native';

import ReviewComponent from '../ReviewComponent';

const styles = StyleSheet.create({
	background: {
    height: '70%',
    display: 'flex',
    marginBottom: 300,
	},
})



const SingleRepositoryContainer = ({ repository, onEndReach }) => {
  const reviews = repository ? repository.reviews.edges.map(review => review.node)
		: [];
	return (
		<>
			{repository ?	
			<View style={styles.background} >
				<RepositoryContainer item={repository} single={true} />
				<FlatList 
					data={reviews}
					ItemSeparatorComponent={ItemSeparator}
					renderItem={(item) => <ReviewComponent item={item.item} title={item.item.user.username} /> }
					keyExtractor={item => item.id}
					ListHeaderComponent={ItemSeparator}
					ListFooterComponent={ItemSeparator}
					onEndReached={() => onEndReach()}
					onEndReachedThreshold={1}
				/>
			</View>
				: null }
		</>
	);
}

const SingleRepository = () => {
	const {id} = useParams();
	const { repository, fetchMore } = useRepository({
    id,
    first: 3,
  });

  const onEndReach = () => {
    fetchMore();
  }

	return (
    <SingleRepositoryContainer repository={repository} onEndReach={onEndReach} />
  )
};

export default SingleRepository;
