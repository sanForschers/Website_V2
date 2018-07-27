import React from 'react';
import Aux from '../../hoc/Auxiliary.js';
import Blog from './Blog/Blog';
import './Blogs.css';
const blogs = () => {
	
	return(
	<Aux>
	<div className="Blogs">
	<Blog/>
	</div>
	</Aux> )

}
export default blogs;