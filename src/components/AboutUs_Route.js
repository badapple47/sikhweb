import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import AboutUs from './AboutUs/AboutUs';
import Footer2 from './Footer2';
import Header from './Header';



class AboutUs_Route extends Component {
  render() {
    return (

      <div >
        <Header/>
        <AboutUs/>
        <Footer2/>
        


      </div>


    );
  }
}

export default AboutUs_Route;
