import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';





class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {


            datapost: { trackno: "" },

        }



    }
    render() {
        return (

            <div className="css-font" >

                <div className="header-top" >
                    <div className="header-top-login text-right" >
                    <a href="/member">Pathompong</a>
                |
                    <a href="/">Logout</a>
                    </div>


                    <img src={require('../pic/Untitled-1.png')} id="sikhlogo" />
                    <h1 id="header-top-banner"> SIKH'S CHARITY GROUP </h1>

                </div>

                <div className="header-bottom">

                    <div className="col-md-2">

                    </div>

                    <div className="col-md-8">

                        <ul className="nav nav-tabs nav-justified" id="gobrown" >
                            <li role="presentation" className="active"><a href="/" id="gobrown">Home</a></li>
                            <li role="presentation"><a href="/member" id="gobrown">Member</a></li>
                            <li role="presentation"><a href="/aboutus" id="gobrown">About Us</a></li>
                            <li role="presentation"><a href="/News" id="gobrown">News</a></li>
                            <li role="presentation"><a href="/event" id="gobrown">Events</a></li>
                            <li role="presentation"><a href="/activity" id="gobrown">Activity</a></li>

                        </ul>


                        <marquee><h4>This text will scroll from right to left</h4></marquee>
                    </div>
                    <div className="col-md-2">
                        
                      
                        
                    </div>



                </div>


            </div>

        );
    };
};


export default Header;
