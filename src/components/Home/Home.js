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

					{/* <div className="container">  */}

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
					{/* </div>  */}

					<div className="page-header">
						<h1>Example page header <small>Subtext for header</small></h1>
					</div>

					<div className="row">
						<div className="col-md-3">
							<div className="thumbnail">
								<img src="..." alt="..." />
								<div className="caption">
									<h3>Thumbnail label</h3>
									<p>...</p>
									<p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
								</div>
							</div>
						</div>
						<div className="col-md-3">
							<div className="thumbnail">
								<img src="..." alt="..." />
								<div className="caption">
									<h3>Thumbnail label</h3>
									<p>...</p>
									<p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
								</div>
							</div>
						</div>
						<div className="col-md-3">
							<div className="thumbnail">
								<img src="..." alt="..." />
								<div className="caption">
									<h3>Thumbnail label</h3>
									<p>...</p>
									<p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
								</div>
							</div>
						</div>
						<div className="col-md-3">
							<div className="thumbnail">
								<img src="..." alt="..." />
								<div className="caption">
									<h3>Thumbnail label</h3>
									<p>...</p>
									<p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
								</div>
							</div>
						</div>
					</div>
					<hr />

					<div className="col-md-6">
						<h2>New videos</h2>

						</div>
						<div className="col-md-6">
							<h2>Live</h2>
							</div>





				</div>



				<div className="col-md-2">

				</div>



			</div>

		);
	};
};


export default Home;


