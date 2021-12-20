import React from "react";
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

import './about.sass'

import Gallery from '../../components/gallery/Gallery'

export default class About extends React.Component {
    render () {
        return(
            <div className='wrapper'>
                <Header></Header>
                <section>
                    <div className='container'>
                        <h2 className='section-title'>
                            About us
                        </h2>
                        <Gallery />
                    </div>
                </section>
                <Footer></Footer>
            </div>
        )
    }
}

