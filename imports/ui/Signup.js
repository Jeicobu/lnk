import React from 'react';
import {Link} from 'react-router';
import { Accounts } from 'meteor/accounts-base';

export default class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ''
        };
    }
    onSubmit(e) {
        e.preventDefault();

        let email = this.refs.email.value.trim();
        let password = this.refs.email.value.trim();

        Accounts.createUser({email, password}, (err) => {
            console.log('Signup callback', err);
        });

        //this.setState({
        //    error: 'Something went wrong.'
        //});
    }
    render() {
        return (
            <div>
                <h1>Join the Lnk</h1>
                {this.state.error ? <div>{this.state.error}</div> : undefined}
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input type="email" ref="email" name="email" placeholder="Email"/>
                    <input type="password" ref="password" name="password" placeholder="Password"/>
                    <button>Create Account</button>
                </form>
                <Link to='/'>Already have account?</Link>
            </div>
        );
    }
}