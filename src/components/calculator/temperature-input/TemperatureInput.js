import React from "react";

import './temperature.sass'

export default class TemperatureInput extends React.Component {

    handleChange = (event) => {
        this.props.onTemperatureChange(event.target.value);
    }

    render() {
        return(
            <div>
                <div className='container'>
                    <fieldset className='temperature-block'>
                        <legend>
                            Temperature in {this.props.scale === 'c' ? 'celsius' : 'fahrenheit'}
                        </legend>
                        <input className='temperature-input' value={this.props.temperature} onChange={this.handleChange}></input>
                    </fieldset>
                </div>
            </div>
        )
    }
}