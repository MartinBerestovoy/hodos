import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Navbar from '../Navbar';
import '../../App.css';


const App = () => {
  const [data, setData] = useState([]); // Estado para almacenar los datos del servidor
  const [formData, setFormData] = useState({
    comida: '',
    hobby: '',
    viaje: '',
    pelicula: '',
    meta: ''
  });
  const [responseMessage, setResponseMessage] = useState(''); // Estado para almacenar el mensaje de respuesta
  const [universidadRecomendada, setUniversidadRecomendada] = useState(''); // Estado para almacenar la universidad recomendada
  const [rutaSeleccionada, setRutaSeleccionada] = useState(null); // Estado para almacenar la ruta seleccionada

  const universidades = [
    'Universidad de Buenos Aires',
    'Universidad Di Tella',
    'Universidad de San Andrés',
    'Universidad de Belgrano'
  ]; // Lista de universidades

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get('http://localhost:3000/getData'); // Petición GET al backend
        setData(response.data); // Actualiza el estado con los datos recibidos
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Llama a la función fetchData al cargar el componente
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value // Actualiza el estado formData con los valores del formulario
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await Axios.post('http://localhost:3000/submitForm', formData); // Envía los datos del formulario al backend
      setResponseMessage('Formulario enviado con éxito: ' + response.data); // Mensaje de respuesta con éxito
      setFormData({ comida: '', hobby: '', viaje: '', pelicula: '', meta: '' }); // Limpia el formulario

      const randomUniversidad = universidades[Math.floor(Math.random() * universidades.length)]; // Selecciona una universidad aleatoria
      setUniversidadRecomendada(randomUniversidad); // Actualiza el estado con la universidad seleccionada

      // Ejemplo de cómo podrías actualizar la ruta seleccionada
      setRutaSeleccionada({
        comida: formData.comida,
        viaje: formData.viaje,
        fecha: new Date().toLocaleDateString() // Fecha actual formateada
      });
    } catch (error) {
      setResponseMessage('Error al enviar el formulario'); // Mensaje de respuesta si hay error
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <h1>Datos del Servidor</h1>
        {data.map((item, index) => (
          <div key={index}>
            <p>{item}</p> {/* Muestra los datos obtenidos del servidor */}
          </div>
        ))}

        <h1>Formulario de Encuesta</h1>
        <form onSubmit={handleSubmit}> {/* Llama a handleSubmit cuando se envía el formulario */}
          <div className="form-group">
            <label htmlFor="comida">¿Cuál es tu comida favorita?</label>
            <input 
              type="text" 
              id="comida" 
              name="comida" 
              value={formData.comida} // Valor del campo de entrada
              onChange={handleChange} // Llama a handleChange cuando el valor cambia
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
        {universidadRecomendada && <div className="universidad-recomendada">Universidad recomendada: {universidadRecomendada}</div>}
        {rutaSeleccionada && (
          <div className="ruta-seleccionada">
            <h2>Ruta Seleccionada</h2>
            <p>Comida Favorita: {rutaSeleccionada.comida}</p>
            <p>Viaje Favorito: {rutaSeleccionada.viaje}</p>
            <p>Fecha: {rutaSeleccionada.fecha}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
