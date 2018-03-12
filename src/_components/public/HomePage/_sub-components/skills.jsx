import React from 'react';


class Skills extends React.Component {
      render() {
        return (
          <div className="skills-agileinfo" id="skills">
          	<div className="container">
          		<h3 className="w3_head w3_head1 white-agile">My Skills <span>My special expertise</span></h3>
          				<div className="modal-spa">
          					<div className="skills">
          						<div className="col-md-6 bar-grids bargrids-left">
          							<h4><span className="glyphicon glyphicon-cog"></span> Technical Skills </h4>
          							<h6>web development  <span> 90% </span></h6>
          							<div className="progress">
          								<div className="progress-bar progress-bar-striped active" style={{width: '90%'}}>
          								</div>
          							</div>
          							<h6>Node js <span> 70% </span></h6>
          							<div className="progress  w3-agile">
          								<div className="progress-bar progress-bar-striped active" style={{width: '70%'}}>
          								</div>
          							</div>
          							<h6>React, Ruby on rails<span>80% </span></h6>
          							<div className="progress  w3-agile">
          								<div className="progress-bar progress-bar-striped active" style={{width: '80%'}}>
          								</div>
          							</div>
          							<h6>Photoshop & illustrator <span> 75% </span></h6>
          							<div className="progress  w3-agile prgs-w3agile-last">
          								<div className="progress-bar progress-bar-striped active" style={{width: '75%'}}>
          								</div>
          							</div>
          						</div>
          						<div className="col-md-6 bar-grids  w3-agile">
          							<h4><span className="glyphicon glyphicon-briefcase"></span> Professional Skills </h4>
          							<h6>Programming<span> 90% </span></h6>
          							<div className="progress">
          								<div className="progress-bar progress-bar-striped active" style={{width: '90%'}}>
          								</div>
          							</div>
          							<h6>Communication<span> 80% </span></h6>
          							<div className="progress">
          								<div className="progress-bar progress-bar-striped active" style={{width: '80%'}}>
          								</div>
          							</div>
          							<h6>Leadership<span>75% </span></h6>
          							<div className="progress">
          								<div className="progress-bar progress-bar-striped active" style={{width: '75%'}}>
          								</div>
          							</div>
          							<h6>Confidence<span>86% </span></h6>
          							<div className="progress prgs-w3agile-last">
          								<div className="progress-bar progress-bar-striped active" style={{width: '86%'}}>
          								</div>
          							</div>
          						</div>
          						<div className="clearfix"> </div>
          					</div>
          				</div>
          		</div>
          </div>
        )
      }

}

export { Skills };
