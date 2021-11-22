import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Text from './Text';

import ReviewComponent from './ReviewComponent';
import useAuthorization from '../hooks/useAuthorization';
import { ItemSeparator } from './RepositoryList/RepositoryList';


const MyReviewsContainer = ({data, onEndReach}) => {
  const reviews = data ? data.reviews.edges.map(review => review.node)
    : [];

  return (
		<FlatList 
			data={reviews}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={(item) => <ReviewComponent item={item.item} title={item.item.repository.name} />}
      keyExtractor={item => item.id}
      onEndReached={() => onEndReach()}
      onEndReachedThreshold={1}
		/>
	);

}

const MyReviews = () => {
	const { data, fetchMore } = useAuthorization({
		includeReviews: true,
		first: 6,
	});
  
  const onEndReach = () => {
    console.log('reached end')
    fetchMore();
  }

  return (
    <MyReviewsContainer data={data} onEndReach={onEndReach} />
  )
}

export default MyReviews