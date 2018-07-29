import React from 'react';
import Layout from '../../component/Layout/Layout';
import './Home.css';
import Logo from '../../component/Logo/Logo';
import Blogs from '../../component/Blogs/Blogs';

class Home extends React.Component {
	render() {
		return(
			<div className="home">
			<Layout>
			
			<h1>san_Forschers</h1>
			<Logo/>

			<Blogs/>
			</Layout>
			</div>
			);
	}
}

export default Home;