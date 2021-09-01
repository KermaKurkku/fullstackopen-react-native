import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Text from '../Text';

import theme from '../../theme';


const styles = StyleSheet.create({
	contentWrapper: {
		padding: 20,
		backgroundColor: theme.colors.cardBack,
	},
	titleContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'flex-start'
	},
	titleContainerText: {
		paddingLeft: 20,
		paddingBottom: 20,
		display: 'flex'
	},
	titleContainerTextItem: {
		paddingBottom: 5,
	},
	avatarStyle: {
		height: 40,
		width: 40,
		borderRadius: 5
	},

	languageStyle: {
		padding: 5,
		borderRadius: 5,
		backgroundColor: theme.colors.primary,
		flexGrow: 0,
		alignSelf: 'flex-start'
	},
	voteContainer: {
		display: 'flex',
		justifyContent: 'space-around',
		flexDirection: 'row',
	},
	voteContainerItem: {
		display: 'flex',

	}
});

const RepositoryItem = ({item}) => {
	return (
		<View style={styles.contentWrapper}>
			<View style={styles.titleContainer}>
				<Image 
					style={styles.avatarStyle}
					source={{ uri: item.ownerAvatarUrl}} />
				<View style={styles.titleContainerText}>
					<Text fontWeight='bold' style={styles.titleContainerTextItem}>{item.fullName}</Text>
					<Text style={styles.titleContainerTextItem}>{item.description}</Text>
					<View style={styles.titleContainerTextItem}>
						<Text style={styles.languageStyle} color='textInverted'>{item.language}</Text>
					</View>
				</View>
			</View>
			
			<View style={styles.voteContainer}>
				<View style={styles.voteContainerItem}>
					<Text fontWeight='bold'>{item.stargazersCount}</Text>
					<Text>Stars</Text>
				</View>
				<View style={styles.voteContainerItem}>
					<Text fontWeight='bold'>{item.forksCount}</Text>
					<Text>Forks</Text>
				</View>
				<View style={styles.voteContainerItem}>
					<Text fontWeight='bold'>{item.reviewCount}</Text>
					<Text>Reviews</Text>
				</View>
				<View style={styles.voteContainerItem}>
					<Text fontWeight='bold'>{item.ratingAverage}</Text>
					<Text>Rating</Text>
				</View>
			</View>
		</View>
	);
};

export default RepositoryItem;