import React from "react";

import logo from '../../images/logo.svg'

import './logo.sass'

export default class Logo extends React.Component {
    render() {

        return (
            <img className='logo' src={logo} alt='logo'></img>
        )
    }
}