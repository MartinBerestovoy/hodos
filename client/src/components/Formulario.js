import React, { useState } from 'react';
import './Formulario.css';
import Axios from 'axios';

const Formulario = () => {
  const [formData, setFormData] = useState({
    comida: '',
    hobby: '',
    viaje: '',
    pelicula: '',
    meta: ''
  });
  const [responseMessage, setResponseMessage] = useState('');
  const [university, setUniversity] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); 

    try {
      const response = await Axios.post('http://localhost:3000/submitForm', formData); // Envía una solicitud POST al backend
      setResponseMessage(response.data.message); // mensaje de éxito
      setUniversity(response.data.university); // universidad recibida del backend
      setFormData({ comida: '', hobby: '', viaje: '', pelicula: '', meta: '' }); // Restablece formulario
    } catch (error) {
      setResponseMessage('Error al enviar el formulario'); //  mensaje de error
      console.error('Error submitting form:', error); // Registra el error en la consola
    }
  };

  return (
    <div className="container">
      <h1>Formulario de Encuesta</h1>
      <form onSubmit={handleSubmit}>
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
        <div>
          <input type="submit" value="Enviar" />
        </div>
      </form>
      {responseMessage && <div className="response-message">{responseMessage}</div>}
      {university && <div className="university-message">Universidad recomendada: {university}</div>}
    </div>
  );
};

export default Formulario;
