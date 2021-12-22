import React from 'react'
import { Link } from "react-router-dom"

import './user.sass'

import loginIcon from '../../images/login.svg'
import logoutIcon from '../../images/logout.svg'

export default class User extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isAuth: false
        }
    }

    handleAuthClick = () => {
        this.setState(prevState => ({
            isAuth: !prevState.isAuth
        }))
    }

    render() {
        let username = 'Vadim'
        return (
            <div className='login'>
                <div className='name'>
                    {this.state.isAuth ? username : 'Guest'}
                </div>
                <Link to='/auth'>
                    <button className='login-button' onClick={this.handleAuthClick}>
                        <img className='login-icon' src={this.state.isAuth ? logoutIcon : loginIcon } alt="auth icon"/>
                        <span>{this.state.isAuth ? 'logout' : 'login' }</span>
                    </button>
                </Link>
            </div>

        )
    }
}

function handleAuthClick() {

}


//this.handleAuthClick = this.handleAuthClick.bind(this)