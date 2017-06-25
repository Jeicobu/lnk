import React from 'react';
import {Link} from 'react-router';

export default class Login extends React.Component {
    render() {
        return (
            <div>
                <div>Login</div>
                login form
                <Link to="/signup">Have an account?</Link>
            </div>
        );
    }
}