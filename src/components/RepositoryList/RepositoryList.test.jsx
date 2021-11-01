import React from 'react';
import { RepositoryListContainer } from './RepositoryList';

import { render } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';

describe('RepositoryList', () => {
	describe('RepositoryListContainer', () => {
	  it('renders repository information correctly', () => {
		const repositories = {
		  totalCount: 8,
		  pageInfo: {
			hasNextPage: true,
			endCursor:
			  'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
			startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
		  },
		  edges: [
			{
			  node: {
				id: 'jaredpalmer.formik',
				fullName: 'jaredpalmer/formik',
				description: 'Build forms in React, without the tears',
				language: 'TypeScript',
				forksCount: 1619,
				stargazersCount: 21856,
				ratingAverage: 88,
				reviewCount: 3,
				ownerAvatarUrl:
				  'https://avatars2.githubusercontent.com/u/4060187?v=4',
			  },
			  cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
			},
			{
			  node: {
				id: 'async-library.react-async',
				fullName: 'async-library/react-async',
				description: 'Flexible promise-based React data loader',
				language: 'JavaScript',
				forksCount: 69,
				stargazersCount: 1760,
				ratingAverage: 72,
				reviewCount: 3,
				ownerAvatarUrl:
				  'https://avatars1.githubusercontent.com/u/54310907?v=4',
			  },
			  cursor:
				'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
			},
		  ],
		};
  
		// Add your test code here
		const { debug, getAllByTestId } = render(<RepositoryListContainer repositories={repositories} />);

		debug();

		const names = getAllByTestId("RepositoryName");
		const descriptions = getAllByTestId("RepositoryDescription");
		const languages = getAllByTestId("RepositoryLanguage");
		const forks = getAllByTestId("RepositoryForks");
		const stargazers = getAllByTestId("RepositoryStargazers");
		const ratingAverages = getAllByTestId("RepositoryRating");
		const reviewCounts = getAllByTestId("RepositoryReviews");

		for (i=0; i < repositories.edges.length; i++) {
			expect(names[i]).toHaveTextContent(repositories.edges[i].node.fullName);
			expect(descriptions[i]).toHaveTextContent(repositories.edges[i].node.description);
			expect(languages[i]).toHaveTextContent(repositories.edges[i].node.language);
			expect(forks[i]).toHaveTextContent(repositories.edges[i].node.forksCount);
			expect(stargazers[i]).toHaveTextContent(repositories.edges[i].node.stargazersCount);
			expect(ratingAverages[i]).toHaveTextContent(repositories.edges[i].node.ratingAverage);
			expect(reviewCounts[i]).toHaveTextContent(repositories.edges[i].node.reviewCount);
		}

	  });
	});
  });