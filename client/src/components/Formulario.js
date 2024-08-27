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
      const response = await axios.post('https://hodos-server-git-main-martinberestovoys-projects.vercel.app//guardar-informacion', formData);

      // Actualizar los estados para mostrar mensajes de éxito
      setResponseMessage('Formulario enviado exitosamente');
      setUniversidad(response.data.universidad || '');

      // Restablecer el formulario a sus valores iniciales
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

              <div className="question-container">
                  <p>3. ¿Qué tan interesado estás en la lectura?</p>
              </div>
              <div className="options-container">
                  {["mucho", "gusta", "indiferente", "no-me-gusta"].map(option => (
                    <label key={option}>
                      <input
                        type="radio"
                        name="lectura"
                        value={option}
                        checked={formData.lectura === option}
                        onChange={handleChange}
                      />
                      {option === "mucho" ? "Me gusta mucho" : option === "gusta" ? "Me gusta" : option === "indiferente" ? "Me es indiferente" : "No me gusta"}
                    </label>
                  ))}
              </div>

              <div className="question-container">
                  <p>4. ¿Qué tan interesado estás en viajar?</p>
              </div>
              <div className="options-container">
                  {["mucho", "gusta", "indiferente", "no-me-gusta"].map(option => (
                    <label key={option}>
                      <input
                        type="radio"
                        name="viajar"
                        value={option}
                        checked={formData.viajar === option}
                        onChange={handleChange}
                      />
                      {option === "mucho" ? "Me gusta mucho" : option === "gusta" ? "Me gusta" : option === "indiferente" ? "Me es indiferente" : "No me gusta"}
                    </label>
                  ))}
              </div>

              <div className="question-container">
                  <p>5. ¿Qué tan interesado estás en la música?</p>
              </div>
              <div className="options-container">
                  {["mucho", "gusta", "indiferente", "no-me-gusta"].map(option => (
                    <label key={option}>
                      <input
                        type="radio"
                        name="musica"
                        value={option}
                        checked={formData.musica === option}
                        onChange={handleChange}
                      />
                      {option === "mucho" ? "Me gusta mucho" : option === "gusta" ? "Me gusta" : option === "indiferente" ? "Me es indiferente" : "No me gusta"}
                    </label>
                  ))}
              </div>

              <div className="button-container">
              <button type="submit">Enviar</button>
              </div>
          </form>
          {responseMessage && <p>{responseMessage}</p>}
          {universidad && <p>Universidad recomendada: {universidad}</p>}
      </div>
    </>
  );
}

// Exporta el componente para que pueda ser usado en otros archivos
export default Formulario;
