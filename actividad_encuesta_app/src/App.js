import './App.css';

import React from 'react';
import Encuestas from './components/Encuestas';


function App() {
  const encuestas = [
      { id: 1, pregunta: '¿Cuál es tu color favorito?', opciones:
      ['Rojo', 'Azul', 'Verde'] },
      { id: 2, pregunta: '¿Cuál es tu comida favorita?', opciones:
      ['Pizza', 'Hamburguesa', 'Sushi'] },
    ];

  return (
    <div className="App">
      <header className="App-header">
        <div className="App">
          <h1>Aplicación de Encuestas</h1>
          <Encuestas encuestas={encuestas} />
        </div>
      </header>
      
    </div>
  );
}

export default App;