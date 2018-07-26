import React from 'react';
import Navigation from '../../component/Navigation/Navigation';
import './Home.css';
import Logo from '../../component/Logo/Logo';

class Home extends React.Component {
	render() {
		return(<div className="home">
				<Navigation/>
			    <h1>san_Forschers</h1>
			<Logo/>

			</div>);
	}
}

export default Home;