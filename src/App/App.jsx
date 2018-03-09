import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../_components/public/HomePage';
import { LoginPage } from '../_components/public/LoginPage';
import { RegisterPage } from '../_components/public/RegisterPage';
import { ForgotPage } from '../_components/public/ForgotPasswordPage'

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { alert } = this.props;
        return (
            <div>
                <Router history={history}>
                    <div>
                        <PrivateRoute exact path="/" component={HomePage} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/register" component={RegisterPage} />
                        <Route path="/forgot" component={ForgotPage} />
                    </div>
                </Router>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
