import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Event from './Event/Event';
import Footer2 from './Footer2';
import Header from './Header';



class Event_Route extends Component {
  render() {
    return (

      <div >
        <Header/>
        <Event/>
        <Footer2/>
        


      </div>


    );
  }
}

export default Event_Route;
