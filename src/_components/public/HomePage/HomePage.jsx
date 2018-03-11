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
import { Footer } from './_sub-components/footer';

import  '../../../_assets/styles/lightbox.css';
import  '../../../_assets/styles/popuo-box.css';
import  '../../../_assets/styles/style.css';
import  { external_typed } from'../../../_assets/js/typed.js';
import  { external_smooth_scroll } from'../../../_assets/js/SmoothScroll.min.js';
import { external_move_to_top } from '../../../_assets/js/move-top.js';
import { external_magnific_popup } from '../../../_assets/js/jquery.magnific-popup.js';
import { external_responsive_slides } from '../../../_assets/js/responsiveslides.min.js';

class HomePage extends React.Component {
    componentDidMount() {
      external_typed();
      external_smooth_scroll();
      external_move_to_top();
      external_magnific_popup();
      external_responsive_slides();
      $('.mobile-nav-button').on('click', function() {
        $( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(1)" ).toggleClass( "mobile-nav-button__line--1");
        $( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(2)" ).toggleClass( "mobile-nav-button__line--2");
        $( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(3)" ).toggleClass( "mobile-nav-button__line--3");
        $('.mobile-menu').toggleClass('mobile-menu--open');
        return false;
      });
      $(function(){

      $("#typed").typed({
        stringsElement: $('#typed-strings'),
        typeSpeed: 30,
        backDelay: 500,
        loop: false,
        contentType: 'html', // or text
        loopCount: false,
        callback: function(){ foo(); },
        resetCallback: function() { newTyped(); }
      });

      $(".reset").click(function(){
        $("#typed").typed('reset');
      });
    });
    function newTyped(){ /* A new typed object */ }

    function foo(){ console.log("Callback"); }
    $('.popup-with-zoom-anim').magnificPopup({
      type: 'inline',
      fixedContentPos: false,
      fixedBgPos: true,
      overflowY: 'auto',
      closeBtnInside: true,
      preloader: false,
      midClick: true,
      removalDelay: 300,
      mainClass: 'my-mfp-zoom-in'
    });

    $("#slider3").responsiveSlides({
      auto: true,
      pager: false,
      nav: true,
      speed: 500,
      namespace: "callbacks",
      before: function () {
    $('.events').append("<li>before event fired.</li>");
    },
    after: function () {
      $('.events').append("<li>after event fired.</li>");
      }
    });

    $(".scroll").click(function(event){
      event.preventDefault();
      $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
    });
    $().UItoTop({ easingType: 'easeOutQuart' });

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
              <Footer/>
              <div className="arr-w3ls">
            	   <a href="#home" id="toTop" style={{display:'block'}}> <span id="toTopHover" style={{opacity: 1}}> </span></a>
            	</div>
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
