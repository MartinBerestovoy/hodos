import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import './Universidades.css';


const Universidades = () => {
  const [loading, setLoading] = useState(true);


  // Simular una carga de 5 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // 5000 ms = 5 segundos


    return () => clearTimeout(timer); // Limpiar el temporizador en caso de que el componente se desmonte
  }, []);


  // Datos estáticos
  const area = "Negocios y Finanzas";
  const universidades = ["Universidad de San Andrés", "UADE", "Universidad Torcuato Di Tella", "UBA Económicas"];


  return (
    <>
      <Navbar />
      {loading ? (
        <p className="loading-message">Cargando...</p> // Mostrar mensaje de carga
      ) : (
        <div className="universidades-container">
          <h1>Área recomendada: {area}</h1>
          <h2>Universidades recomendadas:</h2>
          <ul>
            {universidades.map((universidad, index) => (
              <li key={index}>{universidad}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};


// Exporta el componente para que pueda ser usado en otros archivos
export default Universidades;


