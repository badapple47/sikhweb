import React, { Component } from 'react';
import './App.css';
// import Footer from './components/Footer';
import Footer from './components/Footer2';
import Header from './components/Header';
import Home_Route from './components/Home_Route';
import Home2_Route from './components/Home2_Route';
import Event_Route from './components/Event_Route';
import News_Route from './components/News_Route';
import Editprofile_Route  from './components/Editprofile_Route';
import Member_Route from './components/Member_Route';

import AboutUs_Route from './components/AboutUs_Route';
import Activity_Route from './components/Activity_Route';

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
  
        

        <Route exact={true} path="/" component={Home_Route} />
        <Route path="/home2" component={Home2_Route} />
        <Route path="/News" component={News_Route} />
        <Route path="/Member" component={Member_Route} />
        <Route path="/Editprofile" component={Editprofile_Route}  />
        <Route path="/aboutus" component={AboutUs_Route} />
        <Route path="/activity" component={Activity_Route} />
      
        <Route path="/Event" component={Event_Route} />
       
    
        



        </div>
    );
  }
}

export default App;
