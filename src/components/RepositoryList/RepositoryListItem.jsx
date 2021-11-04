import React from 'react';
import { View, StyleSheet, Image, Pressable } from 'react-native';
import Text from '../Text';

import * as Linking from 'expo-linking';

import theme from '../../theme';


const styles = StyleSheet.create({
	contentWrapper: {
		padding: 20,
		backgroundColor: theme.colors.cardBack,
		height: 'auto',
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

	},
	githubButton: {
		marginTop: 10,
		padding: 12,
		borderRadius: 3,
		backgroundColor: theme.colors.primary,
		flexGrow: 1,
		alignItems: 'center',
	}
});

export const RepositoryContainer = ({item, single}) => {
	const handleGithub = () => {
		Linking.openURL(item.url)
	}
	return (
		<View style={styles.contentWrapper} testID={item.id}>
			<View style={styles.titleContainer}>
				<Image 
					style={styles.avatarStyle}
					source={{ uri: item.ownerAvatarUrl}} />
				<View style={styles.titleContainerText}>
					<Text 
						fontWeight='bold' 
						style={styles.titleContainerTextItem}
						testID="RepositoryName"
					>{item.fullName}</Text>
					<Text 
						style={styles.titleContainerTextItem}
						testID="RepositoryDescription"
					>{item.description}</Text>
					<View style={styles.titleContainerTextItem}>
						<Text 
							style={styles.languageStyle} color='textInverted'
							testID="RepositoryLanguage"
						>{item.language}</Text>
					</View>
				</View>
			</View>
			
			<View style={styles.voteContainer}>
				<View style={styles.voteContainerItem}>
					<Text 
						fontWeight='bold'
						testID="RepositoryStargazers"
					>{item.stargazersCount}</Text>
					<Text>Stars</Text>
				</View>
				<View style={styles.voteContainerItem}>
					<Text 
						fontWeight='bold'
						testID="RepositoryForks"
					>{item.forksCount}</Text>
					<Text>Forks</Text>
				</View>
				<View style={styles.voteContainerItem}>
					<Text 
						fontWeight='bold'
						testID="RepositoryReviews"
					>{item.reviewCount}</Text>
					<Text>Reviews</Text>
				</View>
				<View style={styles.voteContainerItem}>
					<Text 
						fontWeight='bold'
						testID="RepositoryRating"
					>{item.ratingAverage}</Text>
					<Text>Rating</Text>
				</View>
			</View>
			{single ? 
					<Pressable style={styles.githubButton} onPress={handleGithub}>
						<Text
							fontWeight={'bold'}
							fontSize={'subheading'}
							color={'textInverted'}
						>
							Open in GitHub
						</Text>
					</Pressable>
					: null
			}
		</View>
	);
};

const RepositoryListItem = ({item, history}) => {
	const onRepositoryPress = () => {
		const link = '/repository/'+item.id
		history.push(link);
	}
	return (
		<Pressable onPress={onRepositoryPress}>
			<RepositoryContainer item={item} single={false} />
		</Pressable>
	);
}

export default RepositoryListItem;