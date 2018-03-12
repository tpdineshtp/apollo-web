import React from 'react';


class About extends React.Component {
      render() {
        return (
          <div>
          <div className="about" id="about">
          	<div className="col-md-6 about-left-w3ls">
          		<h5>Follow <br/>me on <br/><span>twitter</span><i className="fa fa-twitter" aria-hidden="true"></i></h5>
          	</div>
          		<div className="col-md-6 person-info-agileits-w3layouts">
          		<h3 className="w3_head w3_head1">About Me <span>I am Dinesh Palanisamy</span></h3>
          		<p><span>Hi!, Iam Dinesh Palanisamy </span> Working in Xome India as a Software Engineer. Skilled in Web development, React js, ruby on rails and Node.js. Strong engineering professional with a B.E focused in CSE from College of Engineering, Guindy, Anna University.</p>
          			<ul>
          				<li><span>Name</span>: Dinesh Palanisamy</li>
          				<li><span>Age</span>: 23 Years</li>
          				<li><span>Experience</span>: 2 Years</li>
          				<li><span>Email</span>: <a href="mailto:tpdineshtp@gmail.com">tpdineshtp@gmail.com</a></li>
          				<li><span>Phone</span>: 73736 13673</li>
          				<li><span>Website</span>: <a href="#">www.mywebsite.com</a></li>
          				<li><span>Address</span>: Chennai, Tamil Nadu, India</li>
          				<li><a href="http://localhost:3000/download/resume" className="botton-w3ls">Download CV</a>
          					<a href="#small-dialog" className="play-icon popup-with-zoom-anim botton-w3ls">Watch my video</a>
          				</li>
          			</ul>
          		</div>
          	<div className="clearfix"></div>
          </div>
          <div id="small-dialog" className="mfp-hide w3ls_small_dialog wthree_pop">
            <div className="agileits_modal_body">
              <iframe src="https://player.vimeo.com/video/18417202"></iframe>
            </div>
          </div>
          <section className="mid-w3layouts">
          	<div className="container">
          		<h6>Iam available for freelance projects.</h6>
          		<h3>Let's <span>work</span> together indeed!</h3>
          		<a href="#contact" className="scroll">Get quote</a>
          	</div>
          </section>
        </div>
        )
      }

}

export { About };
