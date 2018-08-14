import React, { Component } from 'react';

import logo from '../../../../logo.svg';


class Homepage extends Component {
    state = {}
    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to Namaqua BoilerPlate for React APP</h1>
                </header>
                <div className="App-intro">
                    <h1>Happy Hacking</h1>
                </div>
            </div>
        );
    }
}

export default Homepage;