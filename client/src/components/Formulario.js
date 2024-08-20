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
    <div className="form-container">
      <h1>Formulario de Intereses</h1>
      <form id="surveyForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="tecnologia">¿Qué tan interesado estás en la tecnología?</label>
          <select id="tecnologia" name="tecnologia" value={formData.tecnologia} onChange={handleChange} required>
            <option value="Me gusta mucho">Me gusta mucho</option>
            <option value="Me gusta">Me gusta</option>
            <option value="Me es indiferente">Me es indiferente</option>
            <option value="No me gusta">No me gusta</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="deporte">¿Qué tan interesado estás en el deporte?</label>
          <select id="deporte" name="deporte" value={formData.deporte} onChange={handleChange} required>
            <option value="Me gusta mucho">Me gusta mucho</option>
            <option value="Me gusta">Me gusta</option>
            <option value="Me es indiferente">Me es indiferente</option>
            <option value="No me gusta">No me gusta</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="lectura">¿Qué tan interesado estás en la lectura?</label>
          <select id="lectura" name="lectura" value={formData.lectura} onChange={handleChange} required>
            <option value="Me gusta mucho">Me gusta mucho</option>
            <option value="Me gusta">Me gusta</option>
            <option value="Me es indiferente">Me es indiferente</option>
            <option value="No me gusta">No me gusta</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="viajar">¿Qué tan interesado estás en viajar?</label>
          <select id="viajar" name="viajar" value={formData.viajar} onChange={handleChange} required>
            <option value="Me gusta mucho">Me gusta mucho</option>
            <option value="Me gusta">Me gusta</option>
            <option value="Me es indiferente">Me es indiferente</option>
            <option value="No me gusta">No me gusta</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="musica">¿Qué tan interesado estás en la música?</label>
          <select id="musica" name="musica" value={formData.musica} onChange={handleChange} required>
            <option value="Me gusta mucho">Me gusta mucho</option>
            <option value="Me gusta">Me gusta</option>
            <option value="Me es indiferente">Me es indiferente</option>
            <option value="No me gusta">No me gusta</option>
          </select>
        </div>
        <button type="submit">Enviar</button>
      </form>
      {responseMessage && <div id="responseMessage" className="response-message">{responseMessage}</div>}
      {universidad && <div id="universidadMessage" className="universidad-message">Universidad recomendada: {universidad}</div>}
    </div>
  );
};

// Exporta el componente para que pueda ser usado en otros archivos
export default Formulario;
