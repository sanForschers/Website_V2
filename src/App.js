import React,{ Component, PropTypes } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './container/Home/Home';
import Aux from './hoc/Auxiliary';
import About from './container/About/About';
import Contact from './container/Contact/Contact';

const App =(props)=> {

    return (
    	<Aux>
      <div>
      {this.props.children}
      
      </div>
      </Aux>
    );
  
}

export default App;
