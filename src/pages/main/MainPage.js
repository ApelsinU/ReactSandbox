import React from "react"
import Header from '../../components/header/Header'
import Main from '../../components/main/Main'
import Footer from '../../components/footer/Footer'
import Calculator from "../../components/calculator/Calculator"

import '../../styles.sass'
import './main-page.sass'

export default class MainPage extends React.Component {
    render () {
        return (
            <div className='wrapper'>
                <Header></Header>
                <Main></Main>
                <Footer></Footer>
            </div>
        );
    }
}