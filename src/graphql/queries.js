import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query (
		$orderBy: AllRepositoriesOrderBy,
		$orderDirection: OrderDirection,
		$searchKeyword: String
		$first: Int
		$after: String
		){
    repositories(
			orderBy: $orderBy,
			orderDirection: $orderDirection
			searchKeyword: $searchKeyword
			first: $first
			after: $after
			) {
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
				cursor
      }
			pageInfo {
				endCursor
				startCursor
				hasNextPage
			}
    }
  }
`;

export const GET_REPOSITORY = gql`
  query ($id: ID!, $first: Int, $after: String) {
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
      reviews (first: $first after: $after) {
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
      pageInfo {
        hasNextPage
        startCursor
        endCursor
      }
      }
    }
  }
`;

export const AUTHORIZED_USER = gql`
  query ($includeReviews: Boolean = false, $first: Int, $after: String){
    authorizedUser {
      username
      reviews (first: $first after: $after) @include(if: $includeReviews){
        edges {
          node {
            id
            repositoryId
            repository {
              name
            }
            user {
              username
            }
            text
            rating
            createdAt
          }
        }
        pageInfo {
          hasNextPage
          startCursor
          endCursor
        }
      }
      reviewCount
    }
  }
`;