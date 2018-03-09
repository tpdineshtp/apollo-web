import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../../_actions';
import  '../../../_assets/styles/login-registration.scss';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
      $("#login-form").validate({
        rules: {
          username: "required",
          password: "required",
        },
        errorClass: "form-invalid"
      });
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }

    render() {
        const { loggedIn, user, loginFailure } = this.props;
        console.log(loginFailure);
        if(loginFailure) {
          $('#login-form').find('.login-form-main-message').addClass('show error').html('Wrong Psername or Password!');
        }
        const { username, password } = this.state;
        return (
            <div className="text-center">
            	<div className="logo">login</div>
            	<div className="login-form-1">
            		<form id="login-form" className="text-left" onSubmit={this.handleSubmit} method="POST">
            			<div className="login-form-main-message"></div>
            			<div className="main-login-form">
            				<div className="login-group">
            					<div className="form-group">
            						<label htmlFor="lg_username" className="sr-only">Username</label>
            						<input type="text" className="form-control" id="lg_username" name="username" placeholder="username" value={username} onChange={this.handleChange}/>
            					</div>
            					<div className="form-group">
            						<label htmlFor="lg_password" className="sr-only">Password</label>
            						<input type="password" className="form-control" id="lg_password" name="password" placeholder="password" value={password} onChange={this.handleChange}/>
            					</div>
            					<div className="form-group login-group-checkbox">
            						<input type="checkbox" id="lg_remember" name="lg_remember"/>
            						<label htmlFor="lg_remember">remember</label>
            					</div>
            				</div>
            				<button type="submit" className="login-button"><i className="fa fa-chevron-right"></i></button>
            			</div>
            			<div className="etc-login-form">
            				<p>forgot your password? <Link to="/forgot">click here</Link></p>
            				<p>new user? <Link to="/register" className="btn btn-link">create new account</Link> </p>
            			</div>
            		</form>
            	</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
  const { loggedIn, user, loginFailure } = state.authentication;
  return {
      loggedIn,
      user,
      loginFailure
  };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage };
