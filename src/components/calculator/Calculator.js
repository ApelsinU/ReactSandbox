import React from "react";

import TemperatureInput from "./temperature-input/TemperatureInput";

import './calculator.sass'

export default class Calculator extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            temperature: '',
            scale: 'c'
        }
    }

    handleCelsiusChange = (temperature) => {
        this.setState({
            scale: 'c',
            temperature
        })
    }

    handleFahrenheitChange = (temperature) => {
        this.setState({
            scale: 'f',
            temperature
        })
    }

    render() {
        const temperature = this.state.temperature;
        const scale = this.state.scale;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return(
            <div className='calculator'>
                <div className='container'>
                    <h2>Boiling Calculator</h2>
                    <TemperatureInput
                        scale='c'
                        temperature={celsius}
                        onTemperatureChange={this.handleCelsiusChange}>
                    </TemperatureInput>
                    <TemperatureInput
                        scale='f'
                        temperature={fahrenheit}
                        onTemperatureChange={this.handleFahrenheitChange}
                    >
                    </TemperatureInput>
                    <BoilingVerdict
                        celsius={parseFloat(celsius)}>
                    </BoilingVerdict>
                </div>
            </div>
        )
    }
}

function toCelsius(fahrenheit) {
    return (fahrenheit -32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature)
    if (Number.isNaN(input)) {
        return ''
    }
    let output = convert(input);
    output = Math.round(output * 1000 ) / 1000;
    return output
}

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>Water would boil</p>
    } else if (props.celsius <= 0) {
        return <p>Water would freeze</p>
    }
    return <p>Water would not boil</p>
}