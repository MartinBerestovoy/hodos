import React from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../Navbar';
import './Inicio.css';

const Inicio = () => {
  const history = useHistory();

  const handleOkClick = () => {
    history.push('/formulario');
  };

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
          <button className="inicio-button" onClick={handleOkClick}>Ok</button>
        </div>
      </div>
    </div>
  );
};

export default Inicio;

