import React, { useState } from "react";
import axios from "axios";
import './Formulario.css';
import Navbar from "./Navbar";

// Componente Formulario
const Formulario = () => {

  // Define el estado inicial del formulario con campos para las 50 preguntas
  const [formData, setFormData] = useState({
    opcion1: "",
    opcion2: "",
    // ...
    opcion50: "",
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [universidad, setUniversidad] = useState('');

  // Lista de preguntas
  const preguntas = [
    "Soy el alma de la fiesta.",
    "Me preocupo poco por los demás.",
    "Siempre estoy preparado.",
    "Me estreso fácilmente.",
    "Tengo un vocabulario rico.",
    "No hablo mucho.",
    "Me intereso por las personas.",
    "Dejo mis pertenencias por ahí.",
    "Estoy relajado la mayor parte del tiempo.",
    "Me cuesta entender ideas abstractas.",
    "Me siento cómodo entre la gente.",
    "Insulto a las personas.",
    "Presto atención a los detalles.",
    "Me preocupo por las cosas.",
    "Tengo una imaginación vívida.",
    "Prefiero mantenerme en segundo plano.",
    "Simpatizo con los sentimientos de los demás.",
    "Hago un lío con las cosas.",
    "Rara vez me siento triste.",
    "No me interesan las ideas abstractas.",
    "Inicio conversaciones.",
    "No me interesan los problemas de otras personas.",
    "Hago las tareas de inmediato.",
    "Me altero fácilmente.",
    "Tengo excelentes ideas.",
    "Tengo poco que decir.",
    "Tengo un corazón blando.",
    "A menudo olvido devolver las cosas a su lugar.",
    "Me molesto con facilidad.",
    "No tengo buena imaginación.",
    "Hablo con muchas personas diferentes en las fiestas.",
    "Me gusta el orden.",
    "Cambio de humor con frecuencia.",
    "Soy rápido para entender las cosas.",
    "No me gusta llamar la atención.",
    "Me tomo un tiempo para los demás.",
    "Evito mis responsabilidades.",
    "Tengo cambios de humor frecuentes.",
    "Uso palabras difíciles.",
    "No me importa ser el centro de atención.",
    "Siento las emociones de los demás.",
    "Sigo un horario.",
    "Me irrito fácilmente.",
    "Paso tiempo reflexionando sobre las cosas.",
    "Soy callado con los desconocidos.",
    "Hago que la gente se sienta a gusto.",
    "Soy exigente en mi trabajo.",
    "A menudo me siento triste.",
    "Estoy lleno de ideas.",
    "Tengo muchas ideas.",
  ];

  // Manejar cambios en los inputs de radio
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Manejar el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault(); // Evita el comportamiento por defecto del formulario

    try {
      // Enviar datos al backend
      const response = await axios.post('https://hodos-server-git-main-martinberestovoys-projects.vercel.app/guardar-informacion', formData);

      // Actualizar los estados para mostrar mensajes de éxito
      setResponseMessage('Formulario enviado exitosamente');
      setUniversidad(response.data.universidad || '');

      // Restablecer el formulario a sus valores iniciales
      setFormData({
        opcion1: "",
        opcion2: "",
        // ...
        opcion50: "",
      });
    } catch (error) {
      setResponseMessage('Error al enviar el formulario');
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>   
      <Navbar/>
      <form onSubmit={handleSubmit} className="form-container">
        {preguntas.map((pregunta, index) => (
          <div key={index}>
            <div className="question-container">
              <p>{index + 1}. {pregunta}</p>
            </div>
            <div className="options-container">
              <label>
                <input
                  type="radio"
                  name={`opcion${index + 1}`}
                  value="5"
                  onChange={handleChange}
                />{" "}
                Me representa mucho
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name={`opcion${index + 1}`}
                  value="4"
                  onChange={handleChange}
                />{" "}
                Me representa
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name={`opcion${index + 1}`}
                  value="3"
                  onChange={handleChange}
                />{" "}
                Me es indiferente
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name={`opcion${index + 1}`}
                  value="2"
                  onChange={handleChange}
                />{" "}
                No me representa
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name={`opcion${index + 1}`}
                  value="1"
                  onChange={handleChange}
                />{" "}
                No me representa en absoluto
              </label>
            </div>
          </div>
        ))}
        <div className="button-container">
          <button type="submit">Enviar</button>
        </div>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
      {universidad && <p>Universidad recomendada: {universidad}</p>}
    </>
  );
}

// Exporta el componente para que pueda ser usado en otros archivos
export default Formulario;


