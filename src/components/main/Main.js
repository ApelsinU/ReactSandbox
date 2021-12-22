import React from "react";
import Clock from "../clock/Clock";
import Games from "../news/Games"

import '../../styles.sass'
import './main.sass'
import Calculator from "../calculator/Calculator";

export default class Main extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='main-inner'>
                    <h2 className='section-title'>Games</h2>
                    <Games></Games>
                </div>
            </div>
        )
    }
}