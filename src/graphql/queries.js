import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
	query {
		repositories {
			edges {
				node {
					id
					ownerName
					ownerAvatarUrl
					description
					language
					url
					fullName
					ratingAverage
					reviewCount
					stargazersCount
					watchersCount
					forksCount
				}
			}
    }
	}
`;

export const GET_REPOSITORY = gql`
	query ($id: ID!) {
		repository (id: $id){
			id
			ownerName
			ownerAvatarUrl
			description
			language
			url
			fullName
			ratingAverage
			reviewCount
			stargazersCount
			watchersCount
			forksCount
			reviews {
				edges {
					node {
						id
						text
						rating
						createdAt
						user {
							id
							username
						}
					}
				}
			}
		}
	}
`;

export const AUTHORIZED_USER = gql`
	query {
		authorizedUser {
			username
		}
	}
`;