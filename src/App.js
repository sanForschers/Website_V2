import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './container/Home/Home';
import Aux from './hoc/Auxiliary';
import About from './container/About/About';
import Contact from './container/Contact/Contact';

class App extends Component {
  render() {
    return (
    	<Aux>
      <div >
      <Home/>
      <About/>
      <Contact/>
      </div>
      </Aux>
    );
  }
}

export default App;
