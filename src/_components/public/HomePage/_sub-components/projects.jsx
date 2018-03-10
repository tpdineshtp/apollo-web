import React from 'react';

class Projects extends React.Component {
  render(){
    return (
      <div class="gallery_wthree" id="gallery">
         <div class="container">
              <h3 class="w3_head w3_head1">My Projects <span>My latest work</span></h3>
        	  <div class="gallery_grid agileits_w3layouts">
        	    <div class="col-md-6  col-sm-6 col-xs-6 grid_w3">
        			<div class="grid-1">
        				<a class="cm-overlay" href="images/gg1.jpg">
        					<img src="./src/_assets/images/gg1.jpg" alt=" " class="img-responsive" />
        					 <div class="w3agile-text w3agile-text-smal1">
        						<h5>Project 1</h5>
        					</div>
        				</a>
        			</div>
        			 <div class="sub_grid gallery_w3l">
        				   <div class="col-md-6 col-sm-6 col-xs-6 grid-1 grid-c grid_w3l">
        						<a class="cm-overlay" href="images/gg2.jpg">
        							<img src="./src/_assets/images/gg2.jpg" alt=" " class="img-responsive" />
        							<div class="w3agile-text w3agile-text-small full-height-w3">
        								<h5>Project 2</h5>
        					        </div>
        						</a>
        					</div>
        				   <div class="col-md-6 col-sm-6 col-xs-6 grid-1 grid-b grid_w3l">
        					 	<a class="cm-overlay" href="images/gg3.jpg">
        							<img src="./src/_assets/images/gg3.jpg" alt=" " class="img-responsive" />
        							<div class="w3agile-text w3agile-text-smal1 full-height-w3">
        								<h5>Project 3</h5>
        							</div>
        						</a>
        					</div>
        				   <div class="clearfix"></div>
        			 </div>
                </div>
        		<div class="col-md-6 col-sm-6 col-xs-6 grid_w3">
        		   <div class="sub_grid">
        			   <div class="col-md-6 col-sm-6 col-xs-6 grid-1 grid-c grid_w3l">
                  			<a class="cm-overlay" href="images/gg4.jpg">
        						<img src="./src/_assets/images/gg4.jpg" alt=" " class="img-responsive" />
        						<div class="w3agile-text w3agile-text-small full-height-w3">
        							<h5>Project 4</h5>
        						</div>
        					</a>
        			   </div>
        			   <div class="col-md-6 col-sm-6 col-xs-6 grid-1 grid-d grid_w3l">
        					<a class="cm-overlay" href="images/gg5.jpg">
        						<img src="./src/_assets/images/gg5.jpg" alt=" " class="img-responsive" />
        						<div class="w3agile-text w3agile-text-smal1 full-height-w3">
        							<h5>Project 5</h5>
        						</div>
        					</a>
        				</div>
        				 <div class="clearfix"></div>
        			   </div>
        		    <div class="grid-1 grid-2">
        				<a class="cm-overlay" href="images/gg6.jpg">
        					<img src="./src/_assets/images/gg6.jpg" alt=" " class="img-responsive" />
        					<div class="w3agile-text w3agile-text-smal1">
        							<h5>Project 6</h5>
        					</div>
        				</a>
        		    </div>
        		   <div class="clearfix"></div>
        		</div>
        		<div class="clearfix"></div>
        	  </div>
        </div>
        </div>
    )
  }
}

export {Projects};
