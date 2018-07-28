import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary.js';
import Navigation from '../Navigation/Navigation';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
	state={
			showSideDrawer:false,
		}
		closeSideDrawerHandler = () => { 
			this.setState({showSideDrawer:false});
		}

		OpenSideDrawerHandler = () => {
			this.setState((prevState) => 
				{return {showSideDrawer:true}});
		}

	render() {
		return(
	<Aux>
	<Navigation showDrawer={this.OpenSideDrawerHandler}/>
	<SideDrawer open={this.state.showSideDrawer} close={this.closeSideDrawerHandler}/>
	<main>
		{this.props.children}
	</main>
	</Aux>);
}
}

export default Layout;