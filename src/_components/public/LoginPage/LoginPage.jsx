import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../../_actions';
import  '../../../_assets/styles/login-registration.scss';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.dispatch(userActions.logout());

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <div className="text-center">
            	<div className="logo">login</div>
            	<div className="login-form-1">
            		<form id="login-form" className="text-left">
            			<div className="login-form-main-message"></div>
            			<div className="main-login-form">
            				<div className="login-group">
            					<div className="form-group">
            						<label htmlFor="lg_username" className="sr-only">Username</label>
            						<input type="text" className="form-control" id="lg_username" name="lg_username" placeholder="username"/>
            					</div>
            					<div className="form-group">
            						<label htmlFor="lg_password" className="sr-only">Password</label>
            						<input type="password" className="form-control" id="lg_password" name="lg_password" placeholder="password"/>
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
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage };
