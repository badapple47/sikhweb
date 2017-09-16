import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Member from './Member/Member';
import Footer2 from './Footer2';
import Header from './Header';



class Member_Route extends Component {
  render() {
    return (

      <div >
        <Header/>
        <Member/>
        <Footer2/>
        


      </div>


    );
  }
}

export default Member_Route;
