import React from 'react';
import './Menu.css';

const menu = (props) => {
	return(
<div onClick={props.clicked} className="container">
  <div className="bar1"></div>
  <div className="bar2"></div>
  <div className="bar3"></div>
</div>
);
}
export default menu;