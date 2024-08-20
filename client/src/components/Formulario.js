const { useState } = React;

const Formulario = () => {
  // Define el estado inicial del formulario con campos para cada pregunta de interés
  const [formData, setFormData] = useState({
    tecnologia: 5,
    deporte: 5,
    lectura: 5,
    viajar: 5,
    musica: 5,
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
      setFormData({ tecnologia: 5, deporte: 5, lectura: 5, viajar: 5, musica: 5 });
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
            type="range"
            id="tecnologia"
            name="tecnologia"
            min="1"
            max="10"
            value={formData.tecnologia}
            onChange={handleChange}
            required
          />
          <div className="range-labels">
            <span>Me gusta mucho</span>
            <span>Me gusta</span>
            <span>Me es indiferente</span>
            <span>No me gusta</span>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="deporte">¿Qué tan interesado estás en el deporte?</label>
          <input
            type="range"
            id="deporte"
            name="deporte"
            min="1"
            max="10"
            value={formData.deporte}
            onChange={handleChange}
            required
          />
          <div className="range-labels">
            <span>Me gusta mucho</span>
            <span>Me gusta</span>
            <span>Me es indiferente</span>
            <span>No me gusta</span>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="lectura">¿Qué tan interesado estás en la lectura?</label>
          <input
            type="range"
            id="lectura"
            name="lectura"
            min="1"
            max="10"
            value={formData.lectura}
            onChange={handleChange}
            required
          />
          <div className="range-labels">
            <span>Me gusta mucho</span>
            <span>Me gusta</span>
            <span>Me es indiferente</span>
            <span>No me gusta</span>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="viajar">¿Qué tan interesado estás en viajar?</label>
          <input
            type="range"
            id="viajar"
            name="viajar"
            min="1"
            max="10"
            value={formData.viajar}
            onChange={handleChange}
            required
          />
          <div className="range-labels">
            <span>Me gusta mucho</span>
            <span>Me gusta</span>
            <span>Me es indiferente</span>
            <span>No me gusta</span>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="musica">¿Qué tan interesado estás en la música?</label>
          <input
            type="range"
            id="musica"
            name="musica"
            min="1"
            max="10"
            value={formData.musica}
            onChange={handleChange}
            required
          />
          <div className="range-labels">
            <span>Me gusta mucho</span>
            <span>Me gusta</span>
            <span>Me es indiferente</span>
            <span>No me gusta</span>
          </div>
        </div>
        <button type="submit">Enviar</button>
      </form>
      {responseMessage && <div id="responseMessage" className="response-message">{responseMessage}</div>}
      {universidad && <div id="universidadMessage" className="universidad-message">Universidad recomendada: {universidad}</div>}
    </div>
  );
};

ReactDOM.render(<Formulario />, document.getElementById('root'));
