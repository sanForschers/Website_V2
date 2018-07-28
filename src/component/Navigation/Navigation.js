import React from 'react';
import Navlinks from './Navlinks/Navlinks';
import './Navigation.css';
import Menu from'./SideDrawer/Menu/Menu';

const Navigation =(props) => {
	return(
		<div className="nav">
		<div className="mobileOnly"><Menu clicked={props.showDrawer}/></div>
		<div className="desktopOnly">
		<Navlinks/>
		</div>
		</div>);

}
export default Navigation;