import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

//codigo de jarbey ocampo
function App() {
    const [clima,setClima] = useState([]);
    const [info,setInfo] = useState ({});
    const [ciudad, setCiudad] = useState('');

    const url='https://api.tutiempo.net/json/?lan=es&apid=zwDX4azaz4X4Xqs&ll=40.4178,-3.7022'

    useEffect (() => {
        const fecthData = async () =>{
          try {
            const response = await axios.get(url);
            setClima(response.data.locality);
            setInfo (response.data.information);
          } catch (error) {
            console.log('error',error);
          }
        }
      fecthData();
    },[])

    const handleConsulta = () => {
      if (ciudad) {
          fetchData(ciudad); 
          setCity(''); 
      }
  };
  return (
    <>
    <h1>Clima</h1>
    <h2>Informacion de las ciudades</h2>
    {clima.map((climas, index) => (
      <div key={index}>
        <h2>Ciudad: {climas.name}</h2>
        <p>Temperatura: {climas.temperature}</p>
        <p>Humedad: {climas.humidity}</p>
        <p>Presión: {climas.pressure}</p>
      </div>
    ))}

    <div>
      <input type="text" placeholder='Consultar ciudad' value={ciudad} onChange={(e) => setCiudad(e.target.value)}/>
      <button onClick={handleConsulta}>Consultar Clima</button>
    </div>
  </>
  )
}

export default App
