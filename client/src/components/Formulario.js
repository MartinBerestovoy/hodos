import React, { useState } from "react";
import axios from "axios";
import './Formulario.css';
import Navbar from "./Navbar";

// Componente Formulario
const Formulario = () => {
  // Define el estado inicial del formulario con campos para cada pregunta de interés
  const [formData, setFormData] = useState({
    tecnologia: "Me gusta mucho",
    deporte: "Me gusta mucho",
    lectura: "Me gusta mucho",
    viajar: "Me gusta mucho",
    musica: "Me gusta mucho",
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [universidad, setUniversidad] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Evita el comportamiento por defecto del formulario

    try {
      const response = await axios.post('http://localhost:3000/guardar-informacion', formData);
      setResponseMessage(response.data.message);
      setUniversidad(response.data.universidad || '');
      
      setFormData({
        tecnologia: "Me gusta mucho",
        deporte: "Me gusta mucho",
        lectura: "Me gusta mucho",
        viajar: "Me gusta mucho",
        musica: "Me gusta mucho"
      });
    } catch (error) {
      setResponseMessage('Error al enviar el formulario');
      console.error('Error submitting form:', error);
    }
  };

  return (
      <>    
         <Navbar/>
         
        
      <div className="form-container">
          <form onSubmit={handleSubmit}>
              <div className="question-container">
                  <p>1. ¿Qué tan interesado estás en la tecnología?</p>
              </div>
              <div className="options-container">
                  {["mucho", "gusta", "indiferente", "no-me-gusta"].map(option => (
                    <label key={option}>
                      <input 
                        type="radio" 
                        name="tecnologia" 
                        value={option} 
                        checked={formData.tecnologia === option}
                        onChange={handleChange} 
                      /> 
                      {option === "mucho" ? "Me gusta mucho" : option === "gusta" ? "Me gusta" : option === "indiferente" ? "Me es indiferente" : "No me gusta"}
                    </label>
                  ))}
              </div>
              <div className="question-container">
                  <p>2. ¿Qué tan interesado estás en los deportes?</p>
              </div>
              <div className="options-container">
                  {["mucho", "gusta", "indiferente", "no-me-gusta"].map(option => (
                    <label key={option}>
                      <input 
                        type="radio" 
                        name="deporte" 
                        value={option} 
                        checked={formData.deporte === option}
                        onChange={handleChange} 
                      /> 
                      {option === "mucho" ? "Me gusta mucho" : option === "gusta" ? "Me gusta" : option === "indiferente" ? "Me es indiferente" : "No me gusta"}
                    </label>
                  ))}
              </div>
              {/* Repite el bloque anterior por cada pregunta que tengas */}
              <div className="button-container">
              <button type="submit">Enviar</button> 
              </div>
          </form>
          {responseMessage && <p>{responseMessage}</p>}
          {universidad && <p>Universidad recomendada: {universidad}</p>}
      </div>
    </>
  )
}

// Exporta el componente para que pueda ser usado en otros archivos
export default Formulario;
