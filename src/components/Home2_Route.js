import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home/Home';
import Footer2 from './Footer2';
import Header2 from './Header2';



class Home2_Route extends Component {
  render() {
    return (

      <div >
        <Header2/>
        <Home/>
        <Footer2/>
        


      </div>


    );
  }
}

export default Home2_Route;
