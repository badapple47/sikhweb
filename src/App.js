import React, { Component } from 'react';
import './App.css';
// import Footer from './components/Footer';
import Footer from './components/Footer2';
import Header from './components/Header';
import Home from './components/Home/Home';
import Events from './components/Event/Event';
import News from './components/News/News';
import Member from './components/Member/Member';

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
        <Route exact={true} path="/" component={Home} />
        <Route path="/News" component={News} />
        <Route path="/Member" component={Member} />
      
        <Route path="/Event" component={Events} />
       
    
        <Footer/>



        </div>
    );
  }
}

export default App;
