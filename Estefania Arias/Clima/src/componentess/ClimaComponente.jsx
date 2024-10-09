import { useState, useEffect } from 'react'
import axios from 'axios'
import {fetch} from 'react'

const ClimaComponente = ({ ciudades, apiKey }) => {
  const [weatherData, setWeatherData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response =('https://api.tutiempo.net/json/?lan=es&apid=zwDX4azaz4X4Xqs&ll=40.4178,-3.7022')
        setWeatherData(response.data);
      } catch (err) {
        setError('Eror')
      }
    };

    fetchWeatherData();
  }, [ciudades, apiKey])



  return (
    <div>
      <h2>Clima en la ciudad {ciudades}</h2>
      <p>La temperatura es: {weatherData.current_condition.temperature}°C</p>
      <p>La humedad es: {weatherData.current_condition.humidity}%</p>
    </div>
  )
}

export default ClimaComponente
