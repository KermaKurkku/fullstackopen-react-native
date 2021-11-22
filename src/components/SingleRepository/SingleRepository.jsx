import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import { RepositoryContainer } from '../RepositoryList';
import { ItemSeparator } from '../RepositoryList/RepositoryList';
import Text from '../Text';
import useRepository from '../../hooks/useRepository';
import { useParams } from 'react-router-native';
import theme from '../../theme';

const styles = StyleSheet.create({
	background: {
    height: '70%',
    display: 'flex',
    marginBottom: 300,
	},
  cardStyle: {
		backgroundColor: theme.colors.cardBack,
		height: 'auto',
  },
  ratingContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    marginRight: 10,
    width: 50,
    height: 50,
    borderRadius: 25, 
    borderColor: theme.colors.primary,
    borderWidth: 3
  },
  ratingTextStyle: {
    color: theme.colors.primary
  },  
  reviewNameContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    margin: 10,
    padding: 10
  },
  infoContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexShrink: 1,
  },
  textContainer: {
    marginTop: 5,
  }
})

const reviewComponent = ({ item }) => {
  const date = new Date(item.createdAt);

	return (
		<View style={styles.cardStyle}>
      <View style={styles.reviewNameContainer}>
        <View style={styles.ratingContainer}>
          <Text
            fontWeight='bold'
            style={styles.ratingTextStyle}
            fontSize='subheading'
            testID='ReviewRating'
          >{item.rating}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text 
            fontWeight='bold'
            fontSize='subheading'
            testID='ReviewName'
          >{item.user.username}</Text>
          <Text
            color="textSecondary"
            testID='ReviewDate'
          >{`${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`}</Text>
          <View style={styles.textContainer}>
            <Text
              testID='ReviewText'
            >{item.text}</Text>
          </View>
        </View>
      </View>
		</View>
	)
}

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
					renderItem={reviewComponent}
					keyExtractor={item => item.id}
          ListHeaderComponent={ItemSeparator}
          ListFooterComponent={ItemSeparator}
          onEndReached={() => onEndReach()}
          onEndReachedThreshold={0.2}
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
