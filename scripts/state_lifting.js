import React, {Component} from "react";
/**
  * Returns JSX element
  * @param celsius React Props
**/
const BoilingVerdict = (props) => {
  if(props.celsius >= 100) {
    return <p>The water would boil.</p>
  }

  return <p>The water would not boil.</p>
};

/**
  * Calculates Fahrenheit or Celsius values
  * Displays JSX markup
**/

class Calculator extends Component {
  state = {
    temperature: "",
    scale: "c"
  }

  handleCelsiusChange = (temperature) => {
    this.setState({ scale: "c", temperature})
  }
  handleFahrenheitChange = (temperature) => {
    this.setState({scale: "f", temperature});
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <TemperatureInput
        scale="c"
        onTemperatureChange={this.handleCelsiusChange}
        temperature={celsius} />
      <TemperatureInput
        onTemperatureChange={this.handleFahrenheitChange}
        scale="f"
        temperature={fahrenheit} />
      <BoilingVerdict
        celsius={parseFloat(temperature)} />
    );
  }
}

/**
 * Map celsius and fahrenheit values
**/
const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

const TemperatureInput = (props) => {

  const handleChange = (event) => {
    props.onTemperatureChange(e.target.value);
  };

  const temperature = props.temperature;
  const scale = props.scale;

  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input
        value={temperature}
        onChange={handleChange}
      />
    </fieldset>
  );
};

const toCelsius = (fahrenheit) => {
  return (fahrenheit - 32) * 5 / 9;
};

const toFahrenheit = (celsius) => {
  return (celsius * 9 / 5) + 32;
};

/**
  * Checks input and returns either empty string or converted value
  * @param: temperature String
  * @param: convert Function
**/
const tryConvert = (temperature, convert) => {
  const input = parseFloat(temperature);

  if(Number.isNaN(input)) {
    return "";
  }

  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;

  return rounded.toString();
};
