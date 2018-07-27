import React from 'react';
import Aux from '../../../hoc/Auxiliary.js';
import './Blog.css';

class Blog extends React.Component {

		state={head:"Lorem ipsum ", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.",
		head1:"Lorem ipsum ", text1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut."}
	
		render () {
	return(
				<div style= {{display:'flex' }}>
		<div className="blog">
		<div className="pin"></div>
		<h2>{this.state.head}</h2>
		<p className="blogText">{this.state.text}</p>
		</div>

		<div style={{width:'40%'}} className="blog">
		<div className="pin"></div>
		<img/>
		</div>



		<div style ={{float:'right'}} className="blog">
		<div className="pin"></div>
		<h2>{this.state.head1}</h2>
		<p className="blogText">{this.state.text1}</p>
		</div>
		</div>


		);
}
}
export default Blog;