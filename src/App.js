import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './container/Home/Home';
import Aux from './hoc/Aux';
import About from './container/About/About';

class App extends Component {
  render() {
    return (
    	<Aux>
      <div >
       <Home/> 
       <About/>
      </div>
      </Aux>
    );
  }
}

export default App;
