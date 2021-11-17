import React from 'react';
import { View } from 'react-native';
import { Route, Switch, Redirect, useParams } from 'react-router-native';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';
import SignUp from './SignUp';
import SingleRepository from './SingleRepository';
import ReviewForm from './ReviewForm';

const Main = () => {
	return (
		<View>
			<AppBar/>
			<Switch>
				<Route path='/' exact>
					<RepositoryList/>
				</Route>
				<Route path='/signUp' exact>
					<SignUp />
				</Route>
				<Route path='/signIn' exact>
					<SignIn />
				</Route>
				<Route path='/repository/:id' exact>
					<SingleRepository />
				</Route>
				<Route path='/createReview' exact>
					<ReviewForm />
				</Route>
				<Redirect to='/' />
			</Switch>
		</View>
		
	);
};

export default Main;