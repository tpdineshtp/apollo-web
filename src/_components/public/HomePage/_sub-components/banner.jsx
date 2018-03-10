import React from 'react';


class Banner extends React.Component {
      render() {
        return (
          <div className="banner" id="home" >
      			<div className="header">
      				<div className="w3_agile_logo">
      					<h1><a href="index.html">My Info<span>WHO IAM</span></a></h1>
      				</div>
      				<div className="w3_menu">
      					<div className="mobile-nav-button">
      						<div className="mobile-nav-button__line"></div>
      						<div className="mobile-nav-button__line"></div>
      						<div className="mobile-nav-button__line"></div>
      					</div>
      					<nav className="mobile-menu">
      						<ul>
      							<li><a href="#home" className="active scroll" >Home</a></li>
      							<li><a href="#about" className="scroll" >About</a></li>
      							<li><a href="#skills" className="scroll" >Skills</a></li>
      							<li><a href="#work" className="scroll" >Education</a></li>
      							<li><a href="#gallery" className="scroll" >Gallery</a></li>
      							<li><a href="#contact" className="scroll" >Contact</a></li>
      						</ul>
      							<div className="clearfix"></div>
      						<div className="search-agileits">
      							<form action="#" method="post">
      								<input type="search" name="Search" placeholder=" " required=""/>
      								<input type="submit" value="Search"/>
      							</form>
      						</div>
      					</nav>
      				</div>
      				<div className="clearfix"> </div>
      			</div>
      			<div className="agile_banner_info">
      			<h2><span>HI! I'm</span> Andrew Smith</h2>
      				<div id="typed-strings" className="agileits_w3layouts_strings">
      						<p>LEAD <i>DEVELOPER.</i></p>
      						<p>LEAD <i>UI/UX DESIGNER.</i></p>
      						<p>LEAD <i>WEB DEVELOPER</i></p>
      					</div>
      				<span id="typed" style={{whiteSpace : 'pre'}}></span>
      				<p className="banner-p-w3ls">Nam arcu mauris, tincidunt Cras sapien urna, malesuada ut varius consequat.</p>
      			</div>
      			<div className="w3_agileits_social_media">
      				<ul>
      					<li><a href="#" className="wthree_facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
      					<li><a href="#" className="wthree_twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
      					<li><a href="#" className="wthree_dribbble"><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
      					<li><a href="#" className="wthree_behance"><i className="fa fa-behance" aria-hidden="true"></i></a></li>
      				</ul>
      			</div>
      			<div className="banner-image-w3layouts">
      				<img src="./src/_assets/images/men.png" alt=" " className="img-responsive" />
      			</div>
      	</div>
        )
      }

}

export { Banner };
