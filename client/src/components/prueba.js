import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom

const Prueba = () => {
  return (
    <div>
      <Link to="/Inicio" className="button">Empezar</Link> {/* Enlace que redirige a /inicio */}
    </div>
  );
}

export default Prueba;
