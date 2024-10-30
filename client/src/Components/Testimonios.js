import React, { useState } from 'react';
import './Testimonios.css';
import Navbar from './Navbar.js';

const testimonios = [
  {
    nombre: "Marcelito Perez",
    texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    nombre: "Ana Martinez",
    texto: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    nombre: "Juan García",
    texto: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    nombre: "Sofia Lopez",
    texto: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    nombre: "Carlos Ramirez",
    texto: "Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo.",
  },
  {
    nombre: "Mariana Rios",
    texto: "Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo.",
  }
];

const Testimonios = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonios.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonios.length) % testimonios.length);
  };

  return (
   <>
    <Navbar />
    <div className="testimonios-container">
      <h2>Testimonios</h2>
      <div className="testimonio">
        <button onClick={handlePrev} className="flecha izquierda">←</button>
        <div className="testimonio-content">
          <h3>{testimonios[current].nombre}</h3>
          <p>{testimonios[current].texto}</p>
        </div>
        <button onClick={handleNext} className="flecha derecha">→</button>
      </div>
    </div>
    </>
  );
};

export default Testimonios;
