HEAD
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Navbar from '../Navbar';

import React, { useState } from 'react'; // Importa React y useState para manejar el estado del componente
import './Formulario.css'; // Importa los estilos CSS específicos para este componente
import Axios from 'axios'; // Importa Axios para manejar solicitudes HTTP
 

const Formulario = () => {
  // Define el estado inicial del formulario
  const [formData, setFormData] = useState({
    comida: '',
    hobby: '',
    viaje: '',
    pelicula: '',
    meta: ''
  });

  // Define el estado para los mensajes de respuesta y la universidad recomendada
  const [responseMessage, setResponseMessage] = useState('');
  const [universidad, setUniversidad] = useState('');

  // Maneja los cambios en los inputs del formulario
  const handleChange = (event) => {
    const { name, value } = event.target; // Extrae el nombre y el valor del input que cambió
    setFormData({
      ...formData, // Copia el estado anterior
      [name]: value // Actualiza el campo específico con el nuevo valor
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
      setUniversidad(response.data.university);
      // Restablece los campos del formulario
      setFormData({ comida: '', hobby: '', viaje: '', pelicula: '', meta: '' });
    } catch (error) {
      // Maneja los errores en caso de que la solicitud falle
      setResponseMessage('Error al enviar el formulario');
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className=""><img src="imagenlogoHODOS.jpeg" alt="Logo HODOS" /></div>
      </nav>
      <div className="div">
        <h1>Formulario HODOS</h1>
        <form id="surveyForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="comida">¿Cuál es tu comida favorita?</label>
            <input
              type="text"
              id="comida"
              name="comida"
              value={formData.comida}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="hobby">¿Cuál es tu hobby favorito?</label>
            <input
              type="text"
              id="hobby"
              name="hobby"
              value={formData.hobby}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="viaje">¿Cuál ha sido tu viaje favorito?</label>
            <input
              type="text"
              id="viaje"
              name="viaje"
              value={formData.viaje}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="pelicula">¿Cuál es tu película favorita?</label>
            <input
              type="text"
              id="pelicula"
              name="pelicula"
              value={formData.pelicula}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="meta">¿Cuál es una meta que te gustaría alcanzar en los próximos 5 años?</label>
            <textarea
              id="meta"
              name="meta"
              rows="4"
              value={formData.meta}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Ok</button>
        </form>
        {responseMessage && <div id="responseMessage" className="response-message">{responseMessage}</div>}
        {universidad && <div id="universidadMessage" className="university-message">Universidad recomendada: {universidad}</div>}
      </div>
    </div>
  );
};

export default Formulario; // Exporta el componente para que pueda ser utilizado en otros archivos
