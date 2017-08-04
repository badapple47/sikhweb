import React, { Component } from 'react';
import './Home.css'
import { Link } from 'react-router-dom';

class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
		}
	}

	render() {
		return (



			<div className="homeja" >
				<div className="col-md-2">

				</div>

				<div className="col-md-8">



					<div id="myCarousel" className="carousel slide" data-ride="carousel">

						<ol className="carousel-indicators">
							<li data-target="#myCarousel" data-slide-to="0" className="active"></li>
							<li data-target="#myCarousel" data-slide-to="1"></li>
							<li data-target="#myCarousel" data-slide-to="2"></li>
						</ol>


						<div className="carousel-inner">
							<div className="item active">
								<img src={require('../../pic/Bhai-Sahib-Satpal-doing-seva-at-Hazur-Sahib.jpg')} />
							</div>

							<div className="item">
								<img src={require('../../pic/Bhai-Sahib-Satpal-doing-seva-at-Hazur-Sahib.jpg')} />
							</div>

							<div className="item">
								<img src={require('../../pic/Bhai-Sahib-Satpal-doing-seva-at-Hazur-Sahib.jpg')} />
							</div>
						</div>


						<a className="left carousel-control" href="#myCarousel" data-slide="prev">
							<span className="glyphicon glyphicon-chevron-left"></span>
							<span className="sr-only">Previous</span>
						</a>
						<a className="right carousel-control" href="#myCarousel" data-slide="next">
							<span className="glyphicon glyphicon-chevron-right"></span>
							<span className="sr-only">Next</span>
						</a>

					</div>


					<div className="page-header" id="gobrown">
						<h1>Latest news <small>Subtext for header</small></h1>
					</div>

					<div className="row">
						<div className="col-md-3">
							<div className="thumbnail">
								
								<div className="caption">
									<h4 id="gobrown">EVERYTHINGS 13 ANNOUNCEMENT</h4>
									<p>
VaheGuru Ji Ka Khalsa, VaheGuru Ji Ki Fateh It is with great sadness we announce the passing of Jagraj Singh, founder of Everythings 13.
Jagraj Singh was diagnosed with stage four inoperable cancer in December 2016.</p>
								<p><a href="#" className="btn btn-primary" role="button" id="gobrownbutton">Read More</a> </p>
								</div>
							</div>
						</div>
						<div className="col-md-3">
							<div className="thumbnail">
							
								<div className="caption">
									<h4 id="gobrown">INTRODUCING BASICS OF SIKHI’S NEW PARCHARAKS IN TRAINING</h4>
									<p>With Guru’s Kirpa, we introduce to you two graduates of the Basics of Sikhi Academy and our new UK Parcharaks in training,</p>
									<p><a href="#" className="btn btn-primary" role="button" id="gobrownbutton">Read More</a> </p>
								</div>
							</div>
						</div>
						<div className="col-md-3">
							<div className="thumbnail">
								
								<div className="caption">
									<h4 id="gobrown">JAGRAJ SINGH WINS GOVERNMENT AWARD</h4>
									<p>On 2nd February 2017, Everythings 13 founder Jagraj Singh became the winner of a ‘Points of Light’ award. Points of Light awards are given to “outstanding individual volunteers – people who are making a change in their community.”</p>
									{/* <img src={require('../../pic/Jagraj-Singh-3 (1).jpg')} /> */}
									<p><a href="#" className="btn btn-primary" role="button" id="gobrownbutton">Read More</a> </p>
								</div>
							</div>
						</div>
						<div className="col-md-3">
							<div className="thumbnail">
							
								<div className="caption">
									<h4 id="gobrown">SIKHS DONATE OVER £100,000 IN UNDER THREE HOURS FOR AMRITSAR PROJECT</h4>
									<p>Aired on 22nd January 2017 on the Sikh Channel in the UK, Europe, Canada and the USA, the fundraiser was done in support of Jagraj Singh, the Basics of Sikhi founder and the visionary behind the Amritsar Visitor Centre project, who is currently battling stage four cancer.</p>
									<p><a href="#" className="btn btn-primary" role="button" id="gobrownbutton">Read More</a> </p>
								</div>
							</div>
						</div>
					</div>

					{/*end top  */}

					<hr />

					{/*stat bottom */}

					<div className="col-md-6">
						<h2 id="gobrown">New videos</h2>

						<div className="row">
							<div className="col-md-12">
								<a href="#" className="thumbnail">
									<img src={require('../../pic/Capture1.PNG')} />
								</a>
							</div>
						</div>

						<div className="col-md-6">
							<h4 id="gobrown">Activities</h4>
							<p>Check out pictures of our recent mission to Nepal​</p>

							<br />

							<h4 id="gobrown">Events</h4>
							<p>Women’s bible reading Wednesday after services</p>

							<br />

							<h4 id="gobrown">Relief Fund</h4>
							<p>Please show your support and donate to our Love the World fund.</p>
						</div>

						<div className="col-md-6">
							<h4 id="gobrown">Subscribe for Updates</h4>
							<input id="subscribe" type="text" className="form-control" placeholder="ENTER E-MAIL"/>
						</div>

					</div>


					<div className="col-md-6">
						<h2 id="gobrown">Live</h2>

						<div className="row">
							<div className="col-md-12">
								<a href="#" className="thumbnail">
									<img src={require('../../pic/1475117_1280x720.jpg')} />
								</a>
							</div>
						</div>

						<h4 id="gobrown">This Week's Sermon</h4>
						<div className="col-md-5">
							<img id="pic" src={require('../../pic/e703d3d133d695ee4af79615ddcd563d.jpg')} />
						</div>
						<div className="col-md-1">
							
						</div>
						<div className="col-md-6">
							<p> This week our minister talked about the overloading of information. In a time when anything and everything is just a click away how do we take a step back and focus on the principles of our faith? </p>
						</div>

					</div>

				



				</div>



				<div className="col-md-2">

				</div>



			</div>

		);
	};
};


export default Home;


