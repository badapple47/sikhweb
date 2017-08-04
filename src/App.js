import React, { Component } from 'react';
import './App.css';
// import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home/Home';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
        <div>
        <Header/>
         <Home/>
        {/* <Footer/>  */}
        </div>
    );
  }
}

export default App;
