import React,{ Component, PropTypes } from 'react';
import Layout from '../../component/Layout/Layout';
import './Home.css';
import Logo from '../../component/Logo/Logo';
import Blogs from '../../component/Blogs/Blogs';

const home = (props)=>{

		return(
			<div className="home">
			<h1>san_Forschers</h1>
			<Logo/>

			<Blogs/>
			</div>
			);
	
}

export default home;