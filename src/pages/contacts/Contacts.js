import React from "react";
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

import './contacts.sass'

export default class Contacts extends React.Component {
    render () {
        return(
            <div className='wrapper'>
                <Header></Header>
                    <h2 className="section-title">
                        Contacts us
                    </h2>
                <Footer></Footer>
            </div>
        )
    }
}