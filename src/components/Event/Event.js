import React, { Component } from 'react';
import './Event.css'
import { Link } from 'react-router-dom';

class Event extends Component {

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

					<div className="col-md-4 " id="FirstEvent">
						<div className="row">
										
											<a href="#" className="thumbnail">
											<img src={require('../../pic/Bhai-Sahib-Satpal-doing-seva-at-Hazur-Sahib.jpg')} />
											</a>
						</div>
										
					</div>

					<div className="col-md-8 ">

						<div className="page-header" id="page-header-event">
						<h1>Example page header <small>Febuary 03,2013</small></h1>
						</div>

						<p>
						VaheGuru Ji Ka Khalsa, VaheGuru Ji Ki Fateh It is with great sadness we announce the passing of Jagraj Singh, founder of Everythings 13.
						Jagraj Singh was diagnosed with stage four inoperable cancer in December 2016.
						</p>

						<button type="button" className="btn btn-default">Read More</button>

					</div>


					<div className="col-md-4 " id="SecondEvent">
					<div className="row">
										
											<a href="#" className="thumbnail" >
											<img src={require('../../pic/Bhai-Sahib-Satpal-doing-seva-at-Hazur-Sahib.jpg')} />
											</a>
										</div> 
										
					</div>

					<div className="col-md-8 ">

						<div className="page-header" id="page-header-event">
						<h1>Example page header <small>Febuary 03,2013</small></h1>
						</div>

						<p>
						VaheGuru Ji Ka Khalsa, VaheGuru Ji Ki Fateh It is with great sadness we announce the passing of Jagraj Singh, founder of Everythings 13.
						Jagraj Singh was diagnosed with stage four inoperable cancer in December 2016.
						</p>

						<button type="button" className="btn btn-default">Read More</button>

					</div>

				
				</div>
				<div className="col-md-3" id="event-right">

				</div>



			</div>

		);
	};
};


export default Event;


