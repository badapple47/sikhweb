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



            <div className="" >

                <div className="header-top" >


                    <img src={require('../pic/Untitled-1.png')} id="sikhlogo" />
                    <h1 id="header-top-banner"> SIKH'S CHARITY GROUP </h1>

                </div>

                <div className="header-bottom">

                    <div className="col-md-2">
                    </div>
                    <div className="col-md-8">

                        <ul className="nav nav-tabs nav-justified">
                            <li role="presentation" className="active"><a href="#">Home</a></li>
                            <li role="presentation"><a href="#">About Us</a></li>
                            <li role="presentation"><a href="#">News</a></li>
                            <li role="presentation"><a href="#">Events</a></li>
                            <li role="presentation"><a href="#">Activity</a></li>

                        </ul>




                        <marquee>This text will scroll from right to left</marquee>
                    </div>
                    <div className="col-md-2">
                        
                    </div>



                </div>


            </div>

        );
    };
};


export default Header;
