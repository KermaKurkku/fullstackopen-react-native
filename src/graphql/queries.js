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

export const SIGN_IN = gql`
  mutation authorize($username: String!, $password: String!){
    authorize(credentials: { username: $username, password: $password }) {
    accessToken
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

export const CREATE_REVIEW = gql`
	mutation createReview($repositoryName: String!, $ownerName: String!, $rating: Int!, $text: String){
		createReview(review: {
			repositoryName: $repositoryName
			ownerName: $ownerName
			rating: $rating
			text: $text
		}) {
			id
			user {
				username
				reviewCount
			}
			userId
			repository {
				name
				fullName
			}
			repositoryId
			rating
			createdAt
			text
		}
	}
`;