import React, { useState } from 'react';
import './Testimonios.css';
import Navbar from './Navbar.js';

const testimonios = [
  {
    nombre: "Juan Gómez",
    texto: "Me llamo Juan Gómez y cursé Ingeniería en Sistemas en la Universidad Tecnológica Nacional (UTN) entre 2012 y 2018. La carrera estaba estipulada para ser finalizada en 6 años, pero a mí me llevó 7. Hoy en día me desempeño como Desarrollador Senior en una empresa de tecnología. Si bien fue una experiencia desafiante, no tengo dudas de que volvería a elegirla. La formación que recibí en la UTN no solo me preparó a nivel técnico, sino que también me enseñó habilidades blandas que aplico a diario. Los proyectos exigentes, el estudio constante y la presión de balancear trabajo y cursada fueron retos duros, pero valieron la pena y me permitieron construir la carrera profesional que siempre soñé.",
  },
  {
    nombre: "Ana Pérez",
    texto: "Me llamo Ana Pérez y cursé Psicología en la Universidad de Buenos Aires (UBA) entre 2010 y 2015. La carrera estaba estipulada para ser completada en 5 años, pero me llevó 6. Actualmente trabajo como psicoterapeuta. La experiencia fue intensa y desafiante, pero enriquecedora. Aprender a trabajar con el ser humano en su complejidad fue un camino difícil pero lleno de satisfacciones. Aunque hubo momentos duros, especialmente con la carga horaria y recursos limitados, volvería a elegir esta carrera por todo lo que me brindó y porque me apasiona aún más hoy que cuando estudiaba",
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
