import React, { Component } from 'react';
import './App.css';
// import Footer from './components/Footer';
import Footer from './components/Footer2';
import Header from './components/Header';
import Home from './components/Home/Home';
import Events from './components/Event/Event';
import News from './components/News/News';
import Editprofile  from './components/Member/Editprofile';
import Member from './components/Member/Member';

import AboutUs from './components/AboutUs/AboutUs';
import Activity from './components/Activity/Activity';

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
        <Route path="/Editprofile " component={Editprofile}  />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/activity" component={Activity} />
      
        <Route path="/Event" component={Events} />
       
    
        <Footer/>



        </div>
    );
  }
}

export default App;
