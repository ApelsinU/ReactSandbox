import React from 'react'
import Logo from '../logo/Logo'
import Nav from '../nav/Nav'
import Clock from "../clock/Clock"
import User from '../../components/user/User'

import '../../styles.sass'
import './header.sass'

export default class Header extends React.Component {

    render() {


        return (
            <div className='container'>
                <header className='header'>
                    <Logo></Logo>
                    <Nav></Nav>
                    <User></User>
                </header>
            </div>
        )
    }
}