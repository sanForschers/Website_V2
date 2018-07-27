import React from 'react';
import Navigation from '../../component/Navigation/Navigation';
import './Home.css';
import Logo from '../../component/Logo/Logo';
import Blogs from '../../component/Blogs/Blogs';

class Home extends React.Component {
	render() {
		return(<div className="home">
			<Navigation>
			<h1>san_Forschers</h1>
			<Logo/><br /><br/> <br /><br/><br/>/<br/>
			</Navigation>
			<Blogs/>

			</div>);
	}
}

export default Home;