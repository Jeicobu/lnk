import React from 'react';
import {Link} from 'react-router';

export default class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    onSubmit(e) {
        e.preventDefualt();

        this.setState({
            error: 'Something went wrong.'
        });
    }
  render() {
    return (
        <div>
            {this.state.error ? <div>{this.state.error}</div> : undefined}
            <form onSubmit={this.onSubmit.bind(this)}>
                <input type="email" name="email" placeholder="Email"/>
                <input type="password" name="password" placeholder="Password"/>
                <button>Create Account</button>
            </form>
            <Link to='/'>Already have account?</Link>
        </div>
    );
  }
}