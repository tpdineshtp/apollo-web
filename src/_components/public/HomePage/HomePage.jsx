import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../../_actions';
import { Banner } from './_sub-components/banner';
import { About } from './_sub-components/about';
import { Skills } from './_sub-components/skills';
import { Experience } from './_sub-components/experience';
import { Services } from './_sub-components/services';
import { Projects } from './_sub-components/projects';

import  '../../../_assets/styles/lightbox.css';
import  '../../../_assets/styles/popuo-box.css';
import  '../../../_assets/styles/style.css';
import  { external_typed } from'../../../_assets/js/typed.js';
import  { external_smooth_scroll } from'../../../_assets/js/SmoothScroll.min.js';

class HomePage extends React.Component {
    componentDidMount() {
      external_typed();
      external_smooth_scroll();
    }

    handleDeleteUser(id) {

    }

    render() {
        const { user } = this.props;
        return (
            <div>
              <Banner/>
              <About/>
              <Skills/>
              <Experience/>
              <Services/>
              <Projects/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { user } =state.authentication;
    return {
        user
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
