import React from 'react';
import { View } from 'react-native';
import { Route, Switch, Redirect, useParams } from 'react-router-native';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';
import SingleRepository from './SingleRepository';

const Main = () => {
	return (
		<View>
			<AppBar/>
			<Switch>
				<Route path='/' exact>
					<RepositoryList/>
				</Route>
				<Route path='/signIn' exact>
					<SignIn/>
				</Route>
				<Route path='/repository/:id'>
					<SingleRepository />
				</Route>
				<Redirect to='/' />
			</Switch>
		</View>
		
	);
};

export default Main;