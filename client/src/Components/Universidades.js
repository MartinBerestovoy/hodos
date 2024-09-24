import React, { useState } from "react"; 
import Navbar from "./Navbar"; 
import './Universidades.css'; 

const Universidades = () => {
  const [data, setData] = useState([
    {
      area: "Marketing y ventas",
      universidad: "Udesa",
    },
    {
      area: "Medicina",
      universidad: "Universidad de Buenos Aires",
    },
    {
      area: "Admin empresas",
      universidad: "Di Tella",
    }, ////// PRUEBAAAAA
  ]); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 

  
  if (loading) {
    return <p className="loading-message">Cargando...</p>; // Mensaje de carga
  }

  if (error) {
    return <p className="error-message">{error}</p>; // Mensaje de error
  }

  return (
    <>
      <Navbar /> 
      <div className="universidades-container">
        {data.map((item, index) => (
          <div key={index}>
            <h1>Área recomendada: {item.area}</h1> 
            <h2>Universidad recomendada: {item.universidad}</h2> 
          </div>
        ))}
      </div>
    </>
  );
};

// Exporta el componente para que pueda ser usado en otros archivos
export default Universidades;
