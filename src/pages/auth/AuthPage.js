import React from "react";
import { Link } from "react-router-dom"
import Logo from "../../components/logo/Logo"

import '../../styles.sass'
import './auth.sass'

export default class AuthPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    handleChange = (event) => {
        event.preventDefault();
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        });
    }

    render () {
        return (
            <div className='wrapper'>
                <div className='container'>
                    <div className='auth-block'>
                        <Logo></Logo>
                        <form onSubmit={this.handleSubmit}>
                            <label className='auth-label'>
                                <span className='label-text'>Name:</span>
                                <input type='text' name='name' value={this.state.name}  onChange={this.handleChange} className='auth-input'></input>
                            </label>
                            <label className='auth-label'>
                                <span className='label-text'>Pass:</span>
                                <input type='text' name='password' value={this.state.password} onChange={this.handleChange} className='auth-input'></input>
                            </label>
                            <Link to="/"><button type='submit' className='auth-button'>Log in</button></Link>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}