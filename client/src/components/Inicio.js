import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Inicio.css';

const Inicio = () => {
  const navigate = useNavigate();

  const handleOkClick = () => {
    navigate('/formulario');
  };

  return (
    <div className="inicio-container">
      <div className="inicio-box">
        <h2>¡Antes de comenzar!</h2>
        <p>
          Este test fue hecho por estudiantes guiados por especialistas.
          <span className="highlight"> No es exacto.</span>
          Esperamos que el screening pueda ayudar lo mayor posible!
          <span className="highlight"> ¡Éxitos!</span>
        </p>
        <button className="inicio-button" onClick={handleOkClick}>Ok</button>
      </div>
    </div>
  );
};

export default Inicio;
