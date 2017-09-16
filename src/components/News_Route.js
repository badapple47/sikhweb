import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import News from './News/News';
import Footer2 from './Footer2';
import Header from './Header';



class News_Route extends Component {
  render() {
    return (

      <div >
        <Header/>
        <News/>
        <Footer2/>
        


      </div>


    );
  }
}

export default News_Route;
