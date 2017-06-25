import React from 'react';
import {browserHistory} from 'react-router';

export default class Link extends React.Component {
    onLogout() {
        browserHistory.push('/');
    }
    render() {
        return (
            <div>
                Link
                <div onClick={this.onLogout.bind(this)}>Logout</div>
            </div>
        );
    }
}