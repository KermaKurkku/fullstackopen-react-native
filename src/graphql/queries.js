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