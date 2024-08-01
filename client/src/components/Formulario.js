import React, { useState } from 'react'; // Importa React y useState para manejar el estado del componente
import './Formulario.css'; // Importa los estilos CSS específicos para este componente
import Axios from 'axios'; // Importa Axios para manejar solicitudes HTTP

const Formulario = () => {
  // Define el estado inicial del formulario con campos para cada pregunta de interés
  const [formData, setFormData] = useState({
    tecnologia: '',
    deporte: '',
    lectura: '',
    viajar: '',
    musica: '',
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
      const response = await Axios.post('http://localhost:3000/submitForm', formData);
      // Actualiza el estado con el mensaje de respuesta y la universidad recomendada
      setResponseMessage(response.data.message);
      setUniversidad(response.data.universidad || ''); // Verifica si la universidad fue proporcionada
      // Restablece los campos del formulario
      setFormData({ tecnologia: '', deporte: '', lectura: '', viajar: '', musica: '' });
    } catch (error) {
      // Maneja los errores en caso de que la solicitud falle
      setResponseMessage('Error al enviar el formulario');
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="form-container">
      <h1>Formulario de Intereses</h1>
      <form id="surveyForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="tecnologia">¿Qué tan interesado estás en la tecnología?</label>
          <input
            type="number"
            id="tecnologia"
            name="tecnologia"
            min="1"
            max="10"
            value={formData.tecnologia}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="deporte">¿Qué tan interesado estás en el deporte?</label>
          <input
            type="number"
            id="deporte"
            name="deporte"
            min="1"
            max="10"
            value={formData.deporte}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lectura">¿Qué tan interesado estás en la lectura?</label>
          <input
            type="number"
            id="lectura"
            name="lectura"
            min="1"
            max="10"
            value={formData.lectura}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="viajar">¿Qué tan interesado estás en viajar?</label>
          <input
            type="number"
            id="viajar"
            name="viajar"
            min="1"
            max="10"
            value={formData.viajar}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="musica">¿Qué tan interesado estás en la música?</label>
          <input
            type="number"
            id="musica"
            name="musica"
            min="1"
            max="10"
            value={formData.musica}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {responseMessage && <div id="responseMessage" className="response-message">{responseMessage}</div>}
      {universidad && <div id="universidadMessage" className="universidad-message">Universidad recomendada: {universidad}</div>}
    </div>
  );
};

export default Formulario;
