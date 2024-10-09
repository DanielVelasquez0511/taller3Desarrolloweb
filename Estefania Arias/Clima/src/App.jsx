import React from 'react';
import ClimaComponente from './componentess/ClimaComponente';

function App() {
   
   
  const ciudades = ['Medellin', 'Bogota', 'Cali'];
  return (
    
    <div>
      <h1>Información del clima</h1>
      {ciudades.map((city, index) => (
        <ClimaComponente key={index} city={ciudades} apiKey={apiKey} />
      ))}
    </div>
  )
}

export default App

