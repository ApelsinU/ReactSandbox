import React from "react";
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
        console.log(this.state.name);
        console.log(this.state.password);
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
                            <button type='submit' className='auth-button'>Log in</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}