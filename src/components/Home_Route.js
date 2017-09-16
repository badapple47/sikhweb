import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home/Home';
import Footer2 from './Footer2';
import Header from './Header';



class Home_Route extends Component {
  render() {
    return (

      <div >
        <Header/>
        <Home/>
        <Footer2/>
        


      </div>


    );
  }
}

export default Home_Route;
