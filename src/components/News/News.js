import React, { Component } from 'react';
import './News.css'
import { Link } from 'react-router-dom';

class News extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (



            <div className="event css-font" >
                <div className="col-md-1" id="event-left">
                </div>
                <div className="col-md-8 " id="event-middle">

                    <div className="row" id="EachNews">

                        <div className="col-md-4 " >
                            <div className="row">

                                <a href="#" className="thumbnail">
                                    <img src={require('../../pic/Bhai-Sahib-Satpal-doing-seva-at-Hazur-Sahib.jpg')} />
                                </a>
                            </div>

                        </div>

                        <div className="col-md-8 ">

                            <div className="page-header" id="page-header-event">
                                <h1 id="gobrown">Example page header <small>Febuary 03,2013</small></h1>
                            </div>

                            <p>
                                VaheGuru Ji Ka Khalsa, VaheGuru Ji Ki Fateh It is with great sadness we announce the passing of Jagraj Singh, founder of Everythings 13.
						Jagraj Singh was diagnosed with stage four inoperable cancer in December 2016.
						</p>

                            <button type="button" className="btn btn-default" id="news-brownbtn">Read More</button>

                        </div>
                    </div>

                    <div className="row" id="EachNews">

                        <div className="col-md-4 " >
                            <div className="row">

                                <a href="#" className="thumbnail">
                                    <img src={require('../../pic/sewa-sri-fatehgarh-sahib-ji-pic-1.jpg')} />
                                </a>
                            </div>

                        </div>

                        <div className="col-md-8 ">

                            <div className="page-header" id="page-header-event">
                                <h1 id="gobrown"> Example page header <small>Febuary 03,2013</small></h1>
                            </div>

                            <p>
                                VaheGuru Ji Ka Khalsa, VaheGuru Ji Ki Fateh It is with great sadness we announce the passing of Jagraj Singh, founder of Everythings 13.
						Jagraj Singh was diagnosed with stage four inoperable cancer in December 2016.
						</p>

                            <button type="button" className="btn btn-default" id="news-brownbtn">Read More</button>

                        </div>





                    </div>


                    <div className="row" id="EachNews">

                        <div className="col-md-4 " >
                            <div className="row">

                                <a href="#" className="thumbnail">
                                    <img src={require('../../pic/7987599929_0c331ee3cf_b.jpg')} />
                                </a>
                            </div>

                        </div>

                        <div className="col-md-8 ">

                            <div className="page-header" id="page-header-event">
                                <h1 id="gobrown">Example page header <small>Febuary 03,2013</small></h1>
                            </div>

                            <p>
                                VaheGuru Ji Ka Khalsa, VaheGuru Ji Ki Fateh It is with great sadness we announce the passing of Jagraj Singh, founder of Everythings 13.
						Jagraj Singh was diagnosed with stage four inoperable cancer in December 2016.
						</p>

                            <button type="button" className="btn btn-default" id="news-brownbtn">Read More</button>

                            <div  id="news-spacewithfooter" > </div>

                        </div>





                    </div>





                </div>
                <div className="col-md-3" id="event-right">


                    <div className="col-md-1">
                    </div>

                    <div className="col-md-9">
                        <h3 id="gobrown">Featured Post</h3>

                        <a href="#" className="thumbnail">
                            <img src={require('../../pic/7987586846_fa5467336b_b.jpg')} />
                        </a>
                        <p>
                            VaheGuru Ji Ka Khalsa, VaheGuru Ji Ki Fateh It is with great sadness we announce
						</p>

                        <h3 id="gobrown">Recent Post</h3>
                        <hr />

                        <div className="row">
                            <div className="col-md-5">

                                <a href="#" className="thumbnail">
                                    <img src={require('../../pic/qujvuknhq.jpg')} />
                                </a>


                            </div>
                            <div className="col-md-7">
                                <p>
                                    VaheGuru Ji Ka Khalsa, VaheGuru Ji Ki Fateh It
						        </p>

                            </div>

                        </div>

                        <div className="row">

                            <div className="col-md-5">

                                <a href="#" className="thumbnail">
                                    <img src={require('../../pic/2-2-1200x480.jpg')} />
                                </a>


                            </div>
                            <div className="col-md-7">
                                <p>
                                    VaheGuru Ji Ka Khalsa, VaheGuru Ji Ki Fateh It
						        </p>

                            </div>
                        </div>
                        




                    </div>


                    <div className="col-md-2">
                    </div>


                </div>



            </div>

        );
    };
};


export default News;


