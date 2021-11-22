import { gql } from '@apollo/client';

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

export const SIGN_IN = gql`
  mutation authorize($username: String!, $password: String!){
    authorize(credentials: { username: $username, password: $password }) {
    accessToken
    }
  }
`;

export const CREATE_USER = gql`
	mutation createUser($username: String! $password: String!) {
    createUser(user: {username: $username, password: $password}) {
      id
      username
      createdAt
    }
  }
`;

export const DELETE_REVIEW = gql`
mutation ($id: ID!) {
	deleteReview(id: $id)
  }
`