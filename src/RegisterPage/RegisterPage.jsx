import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        const { dispatch } = this.props;
        if (user.firstName && user.lastName && user.username && user.password) {
            dispatch(userActions.register(user));
        }
    }

    render() {
        const { registering  } = this.props;
        const { user, submitted } = this.state;
        return (
          <div className="text-center">
            <div className="logo">register</div>
            <div className="login-form-1">
              <form id="register-form" className="text-left">
                <div className="login-form-main-message"></div>
                <div className="main-login-form">
                  <div className="login-group">
                    <div className="form-group">
                      <label htmlFor="reg_username" className="sr-only">Email address</label>
                      <input type="text" className="form-control" id="reg_username" name="reg_username" placeholder="username"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="reg_password" className="sr-only">Password</label>
                      <input type="password" className="form-control" id="reg_password" name="reg_password" placeholder="password"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="reg_password_confirm" className="sr-only">Password Confirm</label>
                      <input type="password" className="form-control" id="reg_password_confirm" name="reg_password_confirm" placeholder="confirm password"/>
                    </div>

                    <div className="form-group">
                      <label htmlFor="reg_email" className="sr-only">Email</label>
                      <input type="text" className="form-control" id="reg_email" name="reg_email" placeholder="email"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="reg_fullname" className="sr-only">Full Name</label>
                      <input type="text" className="form-control" id="reg_fullname" name="reg_fullname" placeholder="full name"/>
                    </div>

                    <div className="form-group login-group-checkbox">
                      <input type="radio" className="" name="reg_gender" id="male" placeholder="username"/>
                      <label htmlFor="male">male</label>

                      <input type="radio" className="" name="reg_gender" id="female" placeholder="username"/>
                      <label htmlFor="female">female</label>
                    </div>

                    <div className="form-group login-group-checkbox">
                      <input type="checkbox" className="" id="reg_agree" name="reg_agree"/>
                      <label htmlFor="reg_agree">i agree with <a href="#">terms</a></label>
                    </div>
                  </div>
                  <button type="submit" className="login-button"><i className="fa fa-chevron-right"></i></button>
                </div>
                <div className="etc-login-form">
                  <p>already have an account? <Link to="/login">login here</Link></p>
                </div>
              </form>
            </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        registering
    };
}

const connectedRegisterPage = connect(mapStateToProps)(RegisterPage);
export { connectedRegisterPage as RegisterPage };
