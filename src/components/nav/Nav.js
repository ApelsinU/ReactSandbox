import React from "react";
import { Link} from "react-router-dom";

import './nav.sass'

export default class Header extends React.Component {
    render() {
        return (
            <nav className='nav'>
                <Link className="nav-link" to={'/'}>
                    Home
                </Link>
                <Link className="nav-link" to={'/about'}>
                    About
                </Link>
                <Link className="nav-link" to={'/contacts'}>
                    Contacts
                </Link>
            </nav>
        )
    }
}