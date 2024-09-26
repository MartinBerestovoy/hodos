import React, { useEffect, useState } from "react"; 
import axios from "axios"; 
import Navbar from "./Navbar"; 
import './Universidades.css'; 

const Universidades = () => {
  const [data, setData] = useState(null); // Cambiado a null para verificar si hay datos
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  // Función para recibir los datos del backend
  const fetchData = async () => {
    try {
      const response = await axios.get("https://hodos-server.vercel.app/guardar-area_recomendada");
      setData(response.data); 
    } catch (error) {
      console.error("Error al obtener datos:", error); 
      setError("No se encontraron datos."); // Mensaje de error
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchData(); // Llama a la función fetchData cuando el componente se monta
  }, []); // Array vacío para que se ejecute solo una vez

  if (loading) {
    return <p className="loading-message">Cargando...</p>; // Mensaje de carga
  }

  if (error) {
    return <p className="error-message">{error}</p>; // Mensaje de error
  }

  if (!data || !data.areaRecomendada) {
    return <p className="error-message">No se encontraron datos válidos.</p>; // Manejo de caso sin datos
  }

  const { area, universidad } = data.areaRecomendada; 

  return (
    <>
      <Navbar /> 
      <div className="universidades-container">
        <h1>Área recomendada: {area}</h1> 
        <h2>Universidad recomendada: {universidad}</h2> 
      </div>
    </>
  );
};

// Exporta el componente para que pueda ser usado en otros archivos
export default Universidades;
