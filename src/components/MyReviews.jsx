import React from 'react';
import { View, StyleSheet, FlatList, Pressable, Alert } from 'react-native';
import Text from './Text';

import ReviewComponent from './ReviewComponent';
import useAuthorization from '../hooks/useAuthorization';
import { ItemSeparator } from './RepositoryList/RepositoryList';
import theme from '../theme';
import { useHistory } from 'react-router-native';
import useDeleteReview from '../hooks/useDeleteReview';

const styles = StyleSheet.create({
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'space-between'
  },
  reviewButton: {
    alignSelf: 'center',
    borderRadius: 3,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30
  }
})

const SingleReview = ({ item, title, history, deleteReview, refetch }) => {
  const onViewButtonPress = () => {
    history.push('/repository/'+item.repositoryId)
  }

  const confirmedDelete = async () => {
    console.log(item)
    try {
      await deleteReview({ id: item.id });
      refetch();
    } catch (e) {
      console.log(e.message)
    }
  }

  const onDeleteButtonPress = () => {
    Alert.alert(
      'Delete Review',
      'Are you sure you want to delete this review',
      [
        {
          text: 'CANCEL',
          onPress: () => console.log('cancel')
        },
        {
          text: 'DELETE',
          onPress: ()  => confirmedDelete()
        }
      ]
    );
  }

  return (
    <>
      <ReviewComponent item={item} title={title} />
      <View style={styles.buttonWrapper}>
        <Pressable 
          style={{ 
            backgroundColor: theme.colors.primary,
            ...styles.reviewButton
          }}
          onPress={onViewButtonPress}
        >
          <Text
            fontWeight='bold'
            color='textInverted'
          >View repository</Text>
        </Pressable>
        <Pressable 
          style={{ 
            backgroundColor: theme.colors.error,
            ...styles.reviewButton
          }}
          onPress={onDeleteButtonPress}
        >
          <Text
            fontWeight='bold'
            color='textInverted'
          >Delete review</Text>
        </Pressable>
      </View>
    </>
  )
}

const MyReviewsContainer = ({ data, onEndReach, deleteReview, refetch }) => {
  const reviews = data ? data.reviews.edges.map(review => review.node)
    : [];

  const history = useHistory();

  return (
		<FlatList 
			data={reviews}
      style={{ height: '90%' }}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={(item) => 
        <SingleReview
          item={item.item}
          title={item.item.repository.name}
          history={history}
          deleteReview={deleteReview}
          refetch={refetch}
        />}
      keyExtractor={item => item.id}
      ListFooterComponent={ItemSeparator}
      onEndReached={() => onEndReach()}
      onEndReachedThreshold={1}
		/>
	);

}

const MyReviews = () => {
	const { data, fetchMore, refetch } = useAuthorization({
		includeReviews: true,
		first: 6,
	});

  const [deleteReview] = useDeleteReview();
  
  const onEndReach = () => {
    fetchMore();
  }

  return (
    <MyReviewsContainer data={data} onEndReach={onEndReach} deleteReview={deleteReview} refetch={refetch} />
  )
}

export default MyReviews