import React from 'react';
import logo from './../logo.jpg';

class Header extends React.Component {
    render() {
        return (
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        )
    }
}

export default Header;