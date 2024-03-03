// TemperatureConverter.js
import React, { useState } from 'react';

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const convertToCelsius = () => {
    const celsiusValue = (parseFloat(fahrenheit) - 32) * (5 / 9);
    setCelsius(celsiusValue.toFixed(2));
  };

  const convertToFahrenheit = () => {
    const fahrenheitValue = (parseFloat(celsius) * 9) / 5 + 32;
    setFahrenheit(fahrenheitValue.toFixed(2));
  };

  return (
    <div>
      <h1>Temperature Converter</h1>
      <div>
        <label>
          Fahrenheit:
          <input type="text" value={fahrenheit} onChange={(e) => setFahrenheit(e.target.value)} />
        </label>
        <button onClick={convertToCelsius}>Convert to Celsius</button>
      </div>
      <div>
        <label>
          Celsius:
          <input type="text" value={celsius} onChange={(e) => setCelsius(e.target.value)} />
        </label>
        <button onClick={convertToFahrenheit}>Convert to Fahrenheit</button>
      </div>
    </div>
  );
};

export default TemperatureConverter;
