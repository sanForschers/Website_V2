import React,{ Component, PropTypes } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './container/Home/Home';
import Aux from './hoc/Auxiliary';
import About_Us from './container/About/About';
import Contact from './container/Contact/Contact';
import { Route } from 'react-router-dom';
import Layout from './component/Layout/Layout';

const App =(props)=> {

    return (

      <Layout>
        <Route path="/contact" component={Contact}/>
        <Route path="/about" component={About_Us}/>
        <Route path="/" exact component={Home}/>
      </Layout>
  
    );
  
}

export default App;
