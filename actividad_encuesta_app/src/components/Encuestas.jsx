import React from 'react';

function Encuestas({ encuestas }) {
    return (
        <div>
            <h2>Encuestas Disponibles</h2>
            <ul>
                {encuestas.map(encuesta => (
                    <li key={encuesta.id}>{encuesta.pregunta}
                        <ul>
                            {encuesta.opciones.map(opcion => (
                                <li>{opcion}</li>
                            ))}
                        </ul>
                    
                    </li>
                ))}
            </ul>
        </div>
    );
} 
export default Encuestas;