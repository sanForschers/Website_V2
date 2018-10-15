import React from 'react';
import {Route} from 'react-router-dom';
import App from './App';
import Home from './container/Home/Home';
//import Projects from '../../../../../learning/src/containers/Projects/Projects';
import ReactDOM from 'react-dom';
import About_Us from './container/About/About'

const routes = (props) =>{
	return(

		<div>
		<Route path="/" exact component={Home} />
		<Route path="/about" component={About_Us} />
		</div>

	);
}
  
export default routes;
	
