import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../../_actions';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                username: '',
                password: '',
                confirm_password: '',
                email: '',
                full_name: '',
                male: '',
                female: '',
                agree_terms: ''
            }
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
        const { user } = this.state;
        const { dispatch } = this.props;
        if (user.username && user.password && user.confirm_password && user.email) {
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
              <form id="register-form" className="text-left" onSubmit={this.handleSubmit} method="POST">
                <div className="login-form-main-message"></div>
                <div className="main-login-form">
                  <div className="login-group">
                    <div className="form-group">
                      <label htmlFor="reg_username" className="sr-only">Username</label>
                      <input type="text" className="form-control" id="reg_username" name="username" placeholder="username" value={user.username} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="reg_password" className="sr-only">Password</label>
                      <input type="password" className="form-control" id="reg_password" name="password" placeholder="password" value={user.password} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="reg_password_confirm" className="sr-only">Password Confirm</label>
                      <input type="password" className="form-control" id="reg_password_confirm" name="confirm_password" placeholder="confirm password" value={user.confirm_password} onChange={this.handleChange}/>
                    </div>

                    <div className="form-group">
                      <label htmlFor="reg_email" className="sr-only">Email</label>
                      <input type="text" className="form-control" id="reg_email" name="email" placeholder="email" value={user.email} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="reg_fullname" className="sr-only">Full Name</label>
                      <input type="text" className="form-control" id="reg_fullname" name="full_name" placeholder="full name" value={user.full_name} onChange={this.handleChange}/>
                    </div>

                    <div className="form-group login-group-checkbox">
                      <input type="radio" className="" name="male" id="male" placeholder="username" value={user.male} onChange={this.handleChange}/>
                      <label htmlFor="male">male</label>

                      <input type="radio" className="" name="female" id="female" placeholder="username" value={user.female} onChange={this.handleChange}/>
                      <label htmlFor="female">female</label>
                    </div>

                    <div className="form-group login-group-checkbox">
                      <input type="checkbox" className="" id="reg_agree" name="agree_terms" value={user.agree_terms} onChange={this.handleChange}/>
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
