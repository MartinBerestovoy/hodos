import React from 'react';
import Navbar from '../src/components/Navbar';
import './Inicio.css';

const Inicio = ({ onOkClick }) => {
  return (
    <div>
      <Navbar />
      <div className="inicio-container">
        <div className="inicio-box">
          <h2>Antes de comenzar!</h2>
          <p>
            Este test fue hecho por estudiantes guiados por especialistas.
            <span className="highlight"> No es exacto.</span>
            Esperamos que el screening pueda ayudar lo mayor posible!
            <span className="highlight"> Exitos!</span>
          </p>
          <button className="inicio-button" onClick={onOkClick}>Ok</button>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
