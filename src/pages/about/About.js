import React from "react";
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'


export default class About extends React.Component {
    render () {
        return(
            <div className='wrapper'>
                <Header></Header>
                <div>
                    About us
                </div>
                <Footer></Footer>
            </div>
        )
    }
}