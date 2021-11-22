import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';

import theme from '../theme';


const styles = StyleSheet.create({
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
  },
});


const ReviewComponent = ({ item, title }) => {
	const date = item
		? new Date(item.createdAt)
		: null;
  
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
    >{title}</Text>
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
  );
};

export default ReviewComponent;