import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Editprofile from './Member/Editprofile';
import Footer2 from './Footer2';
import Header from './Header';



class Editprofile_Route extends Component {
  render() {
    return (

      <div >
        <Header/>
        <Editprofile/>
        <Footer2/>
        


      </div>


    );
  }
}

export default Editprofile_Route;
