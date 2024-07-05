// src/components/Home.js
import React from 'react';
import { useHistory } from 'react-router-dom';
import './Inicio.css'; // Asegúrate de que este archivo CSS existe y contiene tus estilos.

const Home = () => {
  const history = useHistory();

  const handleOkClick = () => {
    history.push('/formulario');
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">HODOS</div>
        <div className="navbar-links">
          <a href="#sobre-nosotros">Sobre Nosotros</a>
          <a href="#especialistas">Especialistas</a>
          <button className="navbar-toggle">
            <span className="navbar-toggle-icon">&#9776;</span>
          </button>
        </div>
      </nav>
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

export default Home;
