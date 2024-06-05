import React, { useEffect, useState } from 'react'; 
import Axios from 'axios';
import './App.css'; 

const App = () => {
  const [data, setData] = useState([]); 
  const [formData, setFormData] = useState({ // Estado para almacenar datos del formulario
    comida: '',
    hobby: '',
    viaje: '',
    pelicula: '',
    meta: ''
  });

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await Axios.get('http://localhost:3000/getData'); // Hace una petición GET al backend
        setData(response.data); // Actualiza el estado con los datos recibidos
      } catch (error) {
        console.error('Error fetching data:', error); 
      }
    };
  
    fetchData(); 
  }, []); 

  const handleChange = (event) => {
  
    const { name, value } = event.target; 
    setFormData({
      ...formData, 
      [name]: value 
    });
  };

  const handleSubmit = async (event) => {
    // Función que maneja el envío del formulario
    event.preventDefault(); // Previene el comportamiento predeterminado del formulario (recargar la página)
    try {
      const response = await Axios.post('http://localhost:3000/submitForm', formData); // Envía los datos del formulario al backend mediante una petición POST
      console.log('Form submitted successfully:', response.data); // Muestra un mensaje de éxito en la consola
      setFormData({ comida: '', hobby: '', viaje: '', pelicula: '', meta: '' }); // Resetea los campos del formulario
    } catch (error) {
      console.error('Error submitting form:', error); // Maneja errores de la petición
    }
  };

  return (
    <div className="App">
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
          <label htmlFor="viaje">¿Cuál ha sido tu viaje más memorable?</label>
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
          <input type="submit" value="Enviar" /> {/* Botón para enviar el formulario */}
        </div>
      </form>
    </div>
  );
};

export default App; 
