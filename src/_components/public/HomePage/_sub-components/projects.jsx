import React from 'react';

class Projects extends React.Component {
  render(){
    return (
      <div className="gallery_wthree" id="gallery">
         <div className="container">
              <h3 className="w3_head w3_head1">My Projects <span>My latest work</span></h3>
        	  <div className="gallery_grid agileits_w3layouts">
        	    <div className="col-md-6  col-sm-6 col-xs-6 grid_w3">
        			<div className="grid-1">
        				<a className="cm-overlay" href="javascript:void(0)">
        					<img src="./src/_assets/images/gg1.jpg" alt=" " className="img-responsive" />
        					 <div className="w3agile-text w3agile-text-smal1">
        						<h5>Project 1</h5>
        					</div>
        				</a>
        			</div>
        			 <div className="sub_grid gallery_w3l">
        				   <div className="col-md-6 col-sm-6 col-xs-6 grid-1 grid-c grid_w3l">
        						<a className="cm-overlay" href="javascript:void(0)">
        							<img src="./src/_assets/images/gg2.jpg" alt=" " className="img-responsive" />
        							<div className="w3agile-text w3agile-text-small full-height-w3">
        								<h5>Project 2</h5>
        					        </div>
        						</a>
        					</div>
        				   <div className="col-md-6 col-sm-6 col-xs-6 grid-1 grid-b grid_w3l">
        					 	<a className="cm-overlay" href="javascript:void(0)">
        							<img src="./src/_assets/images/gg3.jpg" alt=" " className="img-responsive" />
        							<div className="w3agile-text w3agile-text-smal1 full-height-w3">
        								<h5>Project 3</h5>
        							</div>
        						</a>
        					</div>
        				   <div className="clearfix"></div>
        			 </div>
                </div>
        		<div className="col-md-6 col-sm-6 col-xs-6 grid_w3">
        		   <div className="sub_grid">
        			   <div className="col-md-6 col-sm-6 col-xs-6 grid-1 grid-c grid_w3l">
                  			<a className="cm-overlay" href="javascript:void(0)">
        						<img src="./src/_assets/images/gg4.jpg" alt=" " className="img-responsive" />
        						<div className="w3agile-text w3agile-text-small full-height-w3">
        							<h5>Project 4</h5>
        						</div>
        					</a>
        			   </div>
        			   <div className="col-md-6 col-sm-6 col-xs-6 grid-1 grid-d grid_w3l">
        					<a className="cm-overlay" href="javascript:void(0)">
        						<img src="./src/_assets/images/gg5.jpg" alt=" " className="img-responsive" />
        						<div className="w3agile-text w3agile-text-smal1 full-height-w3">
        							<h5>Project 5</h5>
        						</div>
        					</a>
        				</div>
        				 <div className="clearfix"></div>
        			   </div>
        		    <div className="grid-1 grid-2">
        				<a className="cm-overlay" href="javascript:void(0)">
        					<img src="./src/_assets/images/gg6.jpg" alt=" " className="img-responsive" />
        					<div className="w3agile-text w3agile-text-smal1">
        							<h5>Project 6</h5>
        					</div>
        				</a>
        		    </div>
        		   <div className="clearfix"></div>
        		</div>
        		<div className="clearfix"></div>
        	  </div>
        </div>
        </div>
    )
  }
}

export {Projects};
