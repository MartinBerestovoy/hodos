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
    nombre: "Juliana Rojas",
    texto: "Mi nombre es Juliana Rojas y estudié Diseño Gráfico en la Universidad de Belgrano desde 2012 hasta 2017, con un plan estipulado de 5 años que completé a tiempo. Trabajo como Directora de Arte en una agencia de publicidad. La volvería a elegir sin dudas; me enseñó a pensar creativamente y a comunicar visualmente, algo que aplico en todos mis proyectos. La carrera fue intensa y con muchas horas de práctica, pero cada proyecto me formó de una manera única.",
  },
  {
    nombre: "Lucas Pérez",
    texto: "Soy Lucas Pérez y egresé de la carrera de Ciencias Políticas en la Universidad de San Andrés (UDESA) en 2019. La carrera tiene un plan estipulado de 4 años y logré finalizarla en ese tiempo. Actualmente trabajo como Asesor en Políticas Públicas para un organismo internacional. Volvería a elegirla porque la formación interdisciplinaria y el enfoque crítico que adquirí fueron fundamentales para mi desarrollo profesional. Los años de cursada fueron intensos, pero cada debate y proyecto me ayudaron a crecer tanto profesional como personalmente.",
  },
  {
    nombre: "Sofía Álvarez",
    texto: "Me llamo Sofía Álvarez y estoy cursando la carrera de Economía en la Universidad Torcuato Di Tella. Comencé en 2021 y el plan estipulado para la carrera es de 4 años. Actualmente, me encuentro en mi tercer año, compaginando el estudio con una pasantía en un banco de inversión. Si bien la carrera es exigente, volvería a elegirla sin dudar. La Di Tella me ha desafiado constantemente y me ha dado herramientas que aplico día a día en el análisis de mercados. La exigencia y la calidad académica son incomparables.",
  },
  {
    nombre: "Florencia García",
    texto: "Soy Florencia García y estoy cursando la carrera de Marketing en la Universidad Argentina de la Empresa (UADE). Comencé en 2020 y me encuentro en mi último año de la carrera, que tiene una duración estipulada de 4 años. Actualmente, trabajo como asistente en una agencia de marketing digital, aplicando lo que aprendo en clase a campañas reales y estrategias de comunicación. Volvería a elegir esta carrera y esta universidad sin dudarlo, ya que la formación práctica y actualizada que ofrece UADE me ha permitido adaptarme rápidamente a las necesidades del mercado. El enfoque moderno y el contacto con casos de la vida real han potenciado mi creatividad, habilidades analíticas y capacidad para diseñar estrategias innovadoras en un mundo tan dinámico como el del marketing.",
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
