import React from 'react';
import {Router, Route, hashHistory, IndexRoute, browserHistory, applyRouterMiddleware} from 'react-router';
import App from './App';
import Home from './container/Home/Home';
import Projects from '../../../../../learning/src/containers/Projects/Projects';
import ReactDOM from 'react-dom';

export default (
	<Router history = {hashHistory}>
		<Route path ="/" component = {App}>
			<IndexRoute component = {Home} />
			
    			 <Route path="/projects" component={Projects}/>
    		
			
		</Route>
	</Router>
	);
