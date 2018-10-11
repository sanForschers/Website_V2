import React from 'react';
import {Router, Route, hashHistory, IndexRoute, applyRouterMiddleware} from 'react-router';
import App from './App';
import {BrowserRouter } from 'react-router-dom';
import Home from './container/Home/Home';
//import Projects from '../../../../../learning/src/containers/Projects/Projects';
import ReactDOM from 'react-dom';

const routes = (props) =>{
	return(
		<Router>
		<Route path="/" exact component={Home} />
	</Router>
	);
}
  
export default routes;
	
