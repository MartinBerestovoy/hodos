
import React, { useState } from 'react';
import './Resultados.css'; // Asegúrate de importar tu archivo CSS
import Navbar from './Navbar';

const Resultados = () => {
  const [resultadoVisible, setResultadoVisible] = useState(false); // Estado para controlar la visibilidad del resultado

  // Manejar el clic en el botón para mostrar el resultado
  const manejarClic = () => {
    setResultadoVisible(!resultadoVisible); // Alternar la visibilidad
  };

  return (
    <>
    <Navbar />
    <div className="container">
      <h2>Resultados formulario:</h2>

      {/* Checkbox opcional, pero no controla la visibilidad en este caso */}
      <input type="checkbox" id="mostrarResultados" className="checkbox" />

      {/* Botón que actúa como un disparador para mostrar el resultado */}
      <button onClick={manejarClic} className="btn">
        Mostrar Resultados
      </button>

      {/* Contenedor de resultados, mostrado solo si resultadoVisible es verdadero */}
      {resultadoVisible && (
        <div id="resultados" className="resultados">
          Diseño en indumentaria
        </div>
      )}
    </div>
    </>
  );
};

export default Resultados;
