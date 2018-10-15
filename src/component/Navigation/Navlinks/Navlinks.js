import React from 'react';
import './Navlinks.css';
import {NavLink} from 'react-router-dom';

const navlinks = () => {
	return(
		<div className="navbutton">
		<NavLink to='/'><span className="link">Home</span></NavLink>
		<NavLink to='about'><span className="link">About Us</span></NavLink>
		<span className="link">Goals</span>
		<span className="link">Projects</span>
		<NavLink to='contact'><span className="link">Contact Us</span></NavLink>
				</div>);
}

export default navlinks;