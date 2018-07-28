import React from 'react';
import Logo from '../../Logo/Logo';
import Navlinks from '../Navlinks/Navlinks';
import './SideDrawer.css';
import Aux from '../../../hoc/Auxiliary';
import Backdrop from '../../Backdrop/Backdrop';

const sideDrawer = (props) => {
	let attachedClasses = ["SideDrawer" , "Close"];
	if(props.open) {
		attachedClasses = ["SideDrawer" , "Open"];
	}

	return (
		<Aux>
		<Backdrop show={props.open} clicked={props.close}/>
		<div className={attachedClasses.join(' ')}>
			<nav>
				<Navlinks/>
			</nav>
		</div>
		</Aux>);
}

export default sideDrawer;