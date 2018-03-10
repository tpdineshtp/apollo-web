import React from 'react';
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div>{ text }</div>;

class Footer extends React.Component {
  render () {
    var center = { lat: 13.021985, lng: 80.1724798 };
    var zoom =  11;
    return (
      <div>
        <div className="contact" id="contact">
        	<h3 className="w3_head w3_head1">Contact Me <span>Get in touch with me</span></h3>
        		<div className="col-md-5 contact-agileits-w3layouts">
        		<form action="#" method="post">
        				<input type="text" name="Your Name" placeholder="Name" required=""/>
        				<input type="email" name="Your Email" placeholder="Email" required=""/>
        				<input type="text" name="Phone Number" placeholder="Number" required=""/>
        				<textarea name="Message" placeholder="Message" required=""></textarea>
        				<input type="submit" value="Submit"/>
        			</form>
        		</div>


        		<div className="col-md-7 contact-map-right">
        		<div id="map">
              <GoogleMapReact
                bootstrapURLKeys={{ key:'AIzaSyDWkM-ZK_SxBaZDcI7OSXxQlrS5SZgSI8A' }}
                defaultCenter={ center }
                defaultZoom={ zoom }>

                <AnyReactComponent
                  lat = {  13.021985 }
                  lng = { 80.1724798 }
                  markers = { center }
                  text = { 'Wheres Waldo?' }
                />
              </GoogleMapReact>
              </div>
        		</div>
        			<div className="clearfix"></div>
        </div>
        <div className="contact-info">
         <div className="container">
        	<div className="col-md-4 contact-grids">
        		<h5>Find me</h5>
        		<div className="w3_agileits_social_media-footer">
        			<ul>
        				<li><a href="#" className="wthree_facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
        				<li><a href="#" className="wthree_twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
        				<li><a href="#" className="wthree_dribbble"><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
        				<li><a href="#" className="wthree_behance"><i className="fa fa-behance" aria-hidden="true"></i></a></li>
        			</ul>
        		</div>
        	</div>
        	<div className="col-md-4 contact-grids contact-mid">
        		<h5>Contact Info</h5>
        		<ul>
        			<li><i className="fa fa-phone" aria-hidden="true"></i>(012) 345 6789</li>
        			<li><i className="fa fa-map-marker" aria-hidden="true"></i>Jackson, 538, USA</li>
        			<li><i className="fa fa-envelope-o" aria-hidden="true"></i><a href="mailto:info@example.com">info@example.com</a></li>
        		</ul>
        	</div>
        	<div className="col-md-4 contact-grids">
        		<h5>My Twitter</h5>
        		<div  className="callbacks_container">
        				<ul className="rslides" id="slider3">
        					<li>
        						<i className="fa fa-twitter" aria-hidden="true"></i>Praesent imperdiet diam sagittis, egestas <a href="#" className="mail">
        						@http://t.co/9vslJFpW</a> <span>ABOUT 15 MINS</span>
        					</li>
        					<li>
        						<i className="fa fa-twitter" aria-hidden="true"></i>Diam sagittis, egestas praesent imperdiet<a href="#" className="mail">
        						@http://t.co/9vslJFpW</a> <span>ABOUT 2 HOURS</span>
        					</li>
        					<li>
        						<i className="fa fa-twitter" aria-hidden="true"></i>Imperdiet diam sagittis, praesent egestas <a href="#" className="mail">
        						@http://t.co/9vslJFpW</a> <span>ABOUT 3 DAYS</span>
        					</li>
        					<li>
        						<i className="fa fa-twitter" aria-hidden="true"></i>Egestas praesent imperdiet diam sagittis <a href="#" className="mail">
        						@http://t.co/9vslJFpW</a> <span>ABOUT 1 WEEK</span>
        					</li>
        				</ul>
        			</div>
        	</div>
        	<div className="clearfix"></div>
        </div>
        </div>
        <div className="copy-w3-agile">
        	<p>Copyright 2017 My Info. All Rights Reserved | Design By <a href="http://w3layouts.com/">W3layouts</a></p>
        </div>
      </div>
    )
  }
}
export {Footer};
