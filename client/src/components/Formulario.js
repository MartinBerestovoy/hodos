import React, { useState } from "react";
import axios from "axios";
import './Formulario.css';

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

  // Define el estado para los mensajes de respuesta y la universidad recomendada
  const [responseMessage, setResponseMessage] = useState('');
  const [universidad, setUniversidad] = useState('');

  // Maneja los cambios en los inputs del formulario
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Maneja el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault(); // Evita el comportamiento por defecto del formulario (recargar la página)

    try {
      // Envía los datos del formulario al backend
      const response = await axios.post('http://localhost:3000/submitForm', formData);
      // Actualiza el estado con el mensaje de respuesta y la universidad recomendada
      setResponseMessage(response.data.message);
      setUniversidad(response.data.universidad || ''); // Verifica si la universidad fue proporcionada
      // Restablece los campos del formulario
      setFormData({
        tecnologia: "Me gusta mucho",
        deporte: "Me gusta mucho",
        lectura: "Me gusta mucho",
        viajar: "Me gusta mucho",
        musica: "Me gusta mucho"
      });
    } catch (error) {
      // Maneja los errores en caso de que la solicitud falle
      setResponseMessage('Error al enviar el formulario');
      console.error('Error submitting form:', error);
    }
  };

  // Renderiza el formulario con JSX
  return (
      <>      
      <div class="header">
          <div class="logo-container">HODOS</div>
            <ul class="navbar">
                <li><a href="#">Sobre Nosotros</a></li>
                <li><a href="#">Áreas de Interés</a></li>
                <li><a href="#">Especialistas</a></li>
            </ul>
      </div>
        
          <div class="form-container">
              <div class="question-container">
                  <p>1. ¿Qué tan interesado estás en la tecnología?</p>
              </div>
              <div class="options-container">
                  <label><input type="radio" name="opcion" value="mucho" /> Me gusta mucho</label><br />
                  <label><input type="radio" name="opcion" value="gusta"/> Me gusta</label><br/>
                  <label><input type="radio" name="opcion" value="indiferente"/> Me es indiferente</label><br/>
                  <label><input type="radio" name="opcion" value="no-me-gusta"/> No me gusta</label>
              </div>
              <div class="button-container">
                  <a href="Pregunta2.html" class="button">Siguiente</a> 
              </div>
          </div>`
    </>
  )
}

// Exporta el componente para que pueda ser usado en otros archivos
export default Formulario;
