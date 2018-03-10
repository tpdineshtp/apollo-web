import React from 'react';

class Services extends React.Component {
  render() {
    return (
      <div className="services" id="classNamees">
        <div className="container">
          <h3 className="w3_head w3_head1">My Services <span>What I can do for you</span></h3>
        </div>
        <div className="agileits_services_grids_bottom">
          <div className="container">
            <div className="col-md-4 agileits_service_grid_btm_left">
              <div className="agileits_service_grid_btm_left1">
                <div className="agileits_service_grid_btm_left2">
                  <i className="fa fa-desktop" aria-hidden="true"></i>
                  <h5>web development</h5>
                  <p>Maecenas sodales eu velit in varius. Phasellus vitae sem vitae urna tempus commodo.</p>
                </div>
                <img src="./src/_assets/images/4.jpg" alt=" " className="img-responsive" />
              </div>
            </div>
            <div className="col-md-4 agileits_service_grid_btm_left">
              <div className="agileits_service_grid_btm_left1">
                <div className="agileits_service_grid_btm_left2">
                  <i className="fa fa-camera-retro" aria-hidden="true"></i>
                  <h5>Photography</h5>
                  <p>Maecenas sodales eu velit in varius. Phasellus vitae sem vitae urna tempus commodo.</p>
                </div>
                <img src="./src/_assets/images/5.jpg" alt=" " className="img-responsive" />
              </div>
            </div>
            <div className="col-md-4 agileits_service_grid_btm_left">
              <div className="agileits_service_grid_btm_left1">
                <div className="agileits_service_grid_btm_left2">
                  <i className="fa fa-apple" aria-hidden="true"></i>
                  <h5>Apps development</h5>
                  <p>Maecenas sodales eu velit in varius. Phasellus vitae sem vitae urna tempus commodo.</p>
                </div>
                <img src="./src/_assets/images/6.jpg" alt=" " className="img-responsive" />
              </div>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
    )
  }
}

export {Services};
