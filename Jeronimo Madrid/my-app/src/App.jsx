import React from 'react';
import PanelClima from './PanelClima';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const apiKey = '3c2409afe8d3ed71177541d49d3073a0'; 

  return (
    <div>
     <center><h1>Informacion Clima</h1></center> 
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <PanelClima apiKey={apiKey} />  
        <PanelClima apiKey={apiKey} />  
        <PanelClima apiKey={apiKey} />  
      </div>
    </div>
  );
};

export default App;
