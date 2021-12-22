import React from 'react'

import Logo from '../logo/Logo'
import Nav from '../nav/Nav'
import User from '../../components/user/User'

import '../../styles.sass'
import './header.sass'
import Clock from "../clock/Clock";

export default class Header extends React.Component {
    render() {
        return (
            <div className='container'>
                <header className='header'>
                    <Logo></Logo>
                    <Nav></Nav>
                    <div className='info'>
                        <Clock className='clock'></Clock>
                        <User></User>
                    </div>
                </header>
            </div>
        )
    }
}