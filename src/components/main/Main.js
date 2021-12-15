import React from "react";
import Clock from "../clock/Clock";
import News from "../news/News"

import '../../styles.sass'
import './main.sass'

export default class Main extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='page'>
                    <Clock></Clock>
                    <News></News>
                </div>
            </div>
        )
    }
}