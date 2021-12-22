import React from "react";

import '../../styles.sass'
import './footer.sass'
import Clock from "../clock/Clock";

export default class Footer extends React.Component {
    render() {
        return (
            <div className='footer'>
                <div className='container'>
                    <div className='footer-inner'>
                        <span>Copyright 2021</span>
                    </div>
                </div>
            </div>
        )
    }
}