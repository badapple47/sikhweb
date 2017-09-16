import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Activity from './Activity/Activity';
import Footer2 from './Footer2';
import Header from './Header';



class Activity_Route extends Component {
  render() {
    return (

      <div >
        <Header/>
        <Activity/>
        <Footer2/>
        


      </div>


    );
  }
}

export default Activity_Route;
