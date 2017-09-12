import React, { Component } from 'react';
import './Member.css'
import { Link } from 'react-router-dom';

class Editprofile extends Component {

	constructor(props) {
		super(props);
		this.state = {
		}
	}

	render() {
		return (



			<div className="Member css-font" >

                <div className="col-md-1" >

                 

				</div>

                <div className="col-md-2 col-md-offset-1" id="member-editprofile">
                    <h2 id="gobrown"> Edit Profile </h2>

                    
						<img src={require('../../pic/7090424333_440770dc8c_o.jpg')} id="member-userprofile" />
				   
                  

				</div>

                <div className="col-md-6" id="">

                <form className="form-horizontal" id="member-editprofile-form">

                                          <div className="form-group">
                                            <label className="control-label col-sm-3 " for="email">Name:</label>
                                            <div className="col-sm-8">
                                              <input type="Email" className="form-control" id="email" placeholder="Name" name="Email" />
                                            </div>
                                          </div>
                                          <div className="form-group">
                                            <label className="control-label col-sm-3" for="pwd">Email:</label>
                                            <div className="col-sm-8"> 
                                              <input type="Password" className="form-control" id="pwd" placeholder="Email" name="Pass"/>
                                            </div>
                                          </div>

                                           <div className="form-group">
                                            <label className="control-label col-sm-3" for="confpwd">Phone:</label>
                                            <div className="col-sm-8"> 
                                              <input type="Password" className="form-control" id="pwd" placeholder="Phone" name="confirmpassword" />
                                            </div>
                                          </div>

                                           <div className="form-group">
                                            <label className="control-label col-sm-3" for="firstname">Address:</label>
                                            <div className="col-sm-8"> 
                                              <input type="First Name" className="form-control" id="pwd" placeholder="Address" name="Firstname" />
                                            </div>
                                          </div>
                                          
                                          <div className="form-group">
                                            <label className="control-label col-sm-3" for="lastname">Subject:</label>
                                            <div className="col-sm-8"> 
                                              <input type="Last Name" className="form-control" id="pwd" placeholder="Subject" name="Lastname" />
                                            </div>
                                          </div>

                                          <div className="form-group">
                                            <label className="control-label col-sm-3" for="phonenum">Message:</label>
                                            <div className="col-sm-8"> 
                                              <input type="Phone Number" className="form-control" id="member-message" placeholder="Message" name="tel" />
                                            </div>
                                          </div>

                                          <a type="button" className="btn btn-default" id= "member-save" href="/"  >Save</a> 


                                          
                                        </form>


                   

				</div>

                <div className="col-md-2" id="">

                  

				</div>
                

				


			</div>

		);
	};
};


export default Editprofile ;


