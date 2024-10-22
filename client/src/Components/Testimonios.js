import React, { useState } from 'react';
import './Testimonios.css'; // Para los estilos

const testimonios = [
  {
    nombre: "Marcelito Perez",
    texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imagen: "url-de-la-imagen-1",
  },
  {
    nombre: "Ana Martinez",
    texto: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imagen: "url-de-la-imagen-2",
  },
  {
    nombre: "Juan García",
    texto: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    imagen: "url-de-la-imagen-3",
  },
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
    <div className="testimonios-container">
      <h2>Testimonios</h2>
      <div className="testimonio">
        <button onClick={handlePrev} className="flecha izquierda">{"<"}</button>
        <div className="testimonio-content">
          <img src={testimonios[current].imagen} alt={testimonios[current].nombre} className="testimonio-img" />
          <h3>{testimonios[current].nombre}</h3>
          <p>{testimonios[current].texto}</p>
        </div>
        <button onClick={handleNext} className="flecha derecha">{">"}</button>
      </div>
    </div>
  );
};

export default Testimonios;
