import React from "react";

import './Nav.sass'

export default class Header extends React.Component {
    render() {
        return (
            <nav className='nav'>
                <a href="#" className="nav-link">about</a>
                <a href="#" className="nav-link">shop</a>
                <a href="#" className="nav-link">contacts</a>
            </nav>
        )
    }
}