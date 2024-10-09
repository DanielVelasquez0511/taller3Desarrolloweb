import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PanelClima = ({ apiKey }) => {
  const [ciudad, setCiudad] = useState('');
  const [clima, setClima] = useState(null);

  const fetchClima = async () => {
    try {
      const valor = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
      );
      const dato = await valor.json();

      if (dato.cod !== 200) { //use este codigo que se encuentra en el json 
        alert('La ciudad o país no existe o fue mal digitada.');//y confirma cuando un valor es traido con exito
        setClima(null); 
      } else {
        setClima(dato); 

      }
    } catch (error) {
      console('Falla Conexión.');
    }
  };

  return (
    <div >
      <input className="form-control" type="text" placeholder="Digite Ciudad" value={ciudad} onChange={(e) => setCiudad(e.target.value)}/>
      <button className="btn btn-primary" onClick={fetchClima}>Traer Informacion</button>
         
      {clima && (
        <div >
          <h2>{clima.name}</h2>
          <p>Temperatura: {clima.main.temp}°C</p>
          <p>Humedad: {clima.main.humidity}%</p>
          <p>Condiciones: {clima.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default PanelClima;