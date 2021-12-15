import React from 'react'

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
            <div className='auth'>
                <div className='name'>
                    {this.state.isAuth ? username : 'Guest'}
                </div>
                <button className='auth-button' onClick={this.handleAuthClick}>
                    <img className='auth-icon' src={this.state.isAuth ? logoutIcon : loginIcon } alt="auth icon"/>
                    <span>{this.state.isAuth ? 'logout' : 'login' }</span>
                </button>
            </div>

        )
    }
}

function handleAuthClick() {

}


//this.handleAuthClick = this.handleAuthClick.bind(this)