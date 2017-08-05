import React, { Component } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';





class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }



    }



    render() {


        return (



          <div className= "row css-font" id="footer" >
  <div className= "container" >
      <div className = "col-md-4" >

        <div id="img">
        <img src={require('../pic/Untitled-1.png')} id="sikhlogo" />
        </div>

        <div id="des">
        </div>

        <div className="input-group" id="footer-email-bar">
        <input type="text" className="form-control" placeholder="ENTER E-MAIL TO SUBSCRIBE"/>
        <span className="input-group-btn" >
        <button className="btn btn-default" id="okbutton" type="button">Go!</button>
        </span>
        </div>


      </div>

      <div className = "col-md-4">
                  
                  <div id="footer-middle">
                  <h3 className="footerlink">SITEMAP</h3>
                
                <li role="presentation">
                  <a className="footerlink" href="/">HOME</a>
                </li>
                <li role="presentation">
                  <a className="footerlink" href="/Service">About Us</a>
                </li>
                <li role="presentation">
                  <a className="footerlink" href="/Promotion">News</a>
                </li>
                <li role="presentation">
                  <a className="footerlink" href="/Payment">Event</a>
                </li>
                <li role="presentation">
                  <a className="footerlink" href="/Tracking">Activity</a>
                </li>
                </div>

      </div>

      <div className = "col-md-4">
        <div id="contact-us">
          <h3> Contact Us </h3>
          <p>    21/333 Mahidol Road </p>
          <p>    Bangkok 10310 Thailand </p>
          <p>    Tel. 02-4329999 </p>
          <p>    Email : test@hotmail.com </p>
        </div>

       

      </div>

       
  </div>




</div>
        );
    };
};


export default Footer;
