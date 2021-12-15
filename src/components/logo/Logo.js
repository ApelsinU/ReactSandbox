import React from "react";

import logo from '../../images/logo.svg'

import './logo.sass'

export default class Logo extends React.Component {
    render() {

        return (
            <div className='logo'>
                <img className='logo-image' src={logo} alt='logo'></img>
                <span className='logo-text'>ReactSandbox</span>
            </div>
        )
    }
}