import React from 'react';
import { Link } from 'react-router-dom';

const Bloques = (props) => {
  const { facultad } = props.match.params;

  // Aquí podrías tener la lógica para determinar los bloques de la facultad

  return (
    <div>
      <h1>Bloques de {facultad}</h1>
      {/* Aquí muestras los bloques de la facultad */}
      <div>
        <Link to={`/bloques/${facultad}/bloque1`}>Bloque 1</Link>
        <Link to={`/bloques/${facultad}/bloque2`}>Bloque 2</Link>
        {/* Otros bloques */}
      </div>
    </div>
  );
}

export default Bloques;