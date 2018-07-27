import React from 'react';
import Navlinks from './Navlinks/Navlinks';

const Navigation =(props) => {
	return(
		<div>
		<Navlinks/>
		{props.children}
		</div>);

}
export default Navigation;