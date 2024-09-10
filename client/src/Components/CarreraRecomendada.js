import React, { useEffect, useState } from "react"; 
import axios from "axios";
import './CarreraRecomendada.css'; 
import Navbar from "./Navbar"; 


const CarreraRecomendada = () => {
  const [carreraRecomendada, setCarreraRecomendada] = useState(''); 
  const [universidades, setUniversidades] = useState([]); 

  
  const fetchCarreraData = async () => {
    try {
      const response = await axios.get('CAMBIAR LA URL CUANDO LO HAGA EMMA'); 
      const data = response.data; // Asume que los datos llegan en formato JSON
      setCarreraRecomendada(data.carreraRecomendada); 
      setUniversidades(data.universidades); 
    } catch (error) {
      console.error('Error fetching carrera data:', error); // Muestra el error en la consola
    }
  };

  useEffect(() => {
    fetchCarreraData(); // Llama a la función al cargar el componente
  }, []); // El arreglo vacío asegura que solo se ejecute al montar el componente

  return (
    <>
      <Navbar /> 
      <div className="carrera-container">
        <h1>Carrera Recomendada</h1>
        {carreraRecomendada ? (
          <div>
            <h2>{carreraRecomendada}</h2> {/* Muestra la carrera recomendada */}
            <h3>Universidades que ofrecen esta carrera:</h3>
            <ul>
              {universidades.length > 0 ? (
                universidades.map((universidad, index) => (
                  <li key={index}>{universidad}</li> // Muestra la lista de universidades
                ))
              ) : (
                <p>No hay universidades disponibles.</p> // Mensaje si no hay universidades
              )}
            </ul>
          </div>
        ) : (
          <p>Cargando carrera recomendada...</p> // Mensaje mientras se carga la información
        )}
      </div>
    </>
  );
};

// Exporta el componente para que pueda ser usado en otros archivos
export default CarreraRecomendada;
