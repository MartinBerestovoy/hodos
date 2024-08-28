import React, { useState } from "react"; // Importa React y el hook useState para manejar el estado
import axios from "axios"; // Importa Axios para hacer solicitudes HTTP
import './Formulario.css'; // Importa los estilos CSS específicos para el formulario
import Navbar from "./Navbar"; // Importa el componente de navegación

// Componente Formulario
const Formulario = () => {
  // Define el estado inicial del formulario con campos para las 50 preguntas
  const [formData, setFormData] = useState({
    opcion1: "",
    opcion2: "",
    opcion3: "",
    opcion4: "",
    opcion5: "",
    opcion6: "",
    opcion7: "",
    opcion8: "",
    opcion9: "",
    opcion10: "",
    opcion11: "",
    opcion12: "",
    opcion13: "",
    opcion14: "",
    opcion15: "",
    opcion16: "",
    opcion17: "",
    opcion18: "",
    opcion19: "",
    opcion20: "",
    opcion21: "",
    opcion22: "",
    opcion23: "",
    opcion24: "",
    opcion25: "",
    opcion26: "",
    opcion27: "",
    opcion28: "",
    opcion29: "",
    opcion30: "",
    opcion31: "",
    opcion32: "",
    opcion33: "",
    opcion34: "",
    opcion35: "",
    opcion36: "",
    opcion37: "",
    opcion38: "",
    opcion39: "",
    opcion40: "",
    opcion41: "",
    opcion42: "",
    opcion43: "",
    opcion44: "",
    opcion45: "",
    opcion46: "",
    opcion47: "",
    opcion48: "",
    opcion49: "",
    opcion50: "",
  });

  const [responseMessage, setResponseMessage] = useState(''); // Estado para manejar el mensaje de respuesta
  const [areaRecomendada, setAreaRecomendada] = useState(''); // Estado para manejar el área recomendada

  // Lista de preguntas (50 preguntas)
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

  // Mapeo de preguntas a cada factor OCEAN
  const oceanMapping = {
    Openness: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50], // Preguntas para Openness
    Conscientiousness: [3, 8, 13, 18, 23, 28, 33, 38, 43, 48], // Preguntas para Conscientiousness
    Extraversion: [1, 6, 11, 16, 21, 26, 31, 36, 41, 46], // Preguntas para Extraversion
    Agreeableness: [2, 7, 12, 17, 22, 27, 32, 37, 42, 47], // Preguntas para Agreeableness
    Neuroticism: [4, 9, 14, 19, 24, 29, 34, 39, 44, 49], // Preguntas para Neuroticism
  };

  // Función para calcular el promedio de todas las respuestas
  const calculateAverageScore = () => {
    const totalScore = Object.values(formData).reduce((acc, curr) => acc + (parseInt(curr, 10) || 0), 0); // Suma todos los valores de las respuestas
    return totalScore / preguntas.length; // Calcula el promedio
  };

  // Función para calcular los puntajes OCEAN
  const calculateOceanScores = () => {
    const scores = {
      Openness: 0,
      Conscientiousness: 0,
      Extraversion: 0,
      Agreeableness: 0,
      Neuroticism: 0,
    };

    // Calcular puntajes sumando las respuestas correspondientes a cada factor
    for (let factor in oceanMapping) {
      oceanMapping[factor].forEach(questionIndex => {
        scores[factor] += parseInt(formData[`opcion${questionIndex}`], 10) || 0; // Suma las respuestas
      });
      // Calcula el promedio de cada factor
      scores[factor] = scores[factor] / oceanMapping[factor].length;
    }

    return scores; // Devuelve los puntajes promedio
  };

  // Manejar cambios en los inputs de radio
  const handleChange = (event) => {
    const { name, value } = event.target; // Extrae el nombre y valor del input
    setFormData({
      ...formData, // Copia el estado actual del formulario
      [name]: value, // Actualiza el valor de la opción seleccionada
    });
  };

  // Manejar el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault(); // Evita el comportamiento por defecto del formulario

    // Calcular puntajes OCEAN y promedio general antes de enviar
    const oceanScores = calculateOceanScores();
    const averageScore = calculateAverageScore();

    try {
      // Enviar datos al backend
      const response = await axios.post('https://hodos-server-git-main-martinberestovoys-projects.vercel.app/guardar-informacion', { oceanScores, averageScore });

      // Actualizar los estados para mostrar mensajes de éxito
      setResponseMessage('Formulario enviado exitosamente');
      setAreaRecomendada(response.data.areaRecomendada || '');

      // Restablecer el formulario a sus valores iniciales
      setFormData({
        opcion1: "",
        opcion2: "",
        opcion3: "",
        opcion4: "",
        opcion5: "",
        opcion6: "",
        opcion7: "",
        opcion8: "",
        opcion9: "",
        opcion10: "",
        opcion11: "",
        opcion12: "",
        opcion13: "",
        opcion14: "",
        opcion15: "",
        opcion16: "",
        opcion17: "",
        opcion18: "",
        opcion19: "",
        opcion20: "",
        opcion21: "",
        opcion22: "",
        opcion23: "",
        opcion24: "",
        opcion25: "",
        opcion26: "",
        opcion27: "",
        opcion28: "",
        opcion29: "",
        opcion30: "",
        opcion31: "",
        opcion32: "",
        opcion33: "",
        opcion34: "",
        opcion35: "",
        opcion36: "",
        opcion37: "",
        opcion38: "",
        opcion39: "",
        opcion40: "",
        opcion41: "",
        opcion42: "",
        opcion43: "",
        opcion44: "",
        opcion45: "",
        opcion46: "",
        opcion47: "",
        opcion48: "",
        opcion49: "",
        opcion50: "",
      });
    } catch (error) {
      setResponseMessage('Error al enviar el formulario'); // Muestra un mensaje de error
      console.error('Error submitting form:', error); // Muestra el error en la consola
    }
  };

  return (
    <>
      <Navbar /> {/* Renderiza el componente de navegación */}
      <form onSubmit={handleSubmit} className="form-container"> {/* Manejador de envío de formulario */}
        {preguntas.map((pregunta, index) => (
          <div key={index}>
            <div className="question-container">
              <p>{index + 1}. {pregunta}</p> {/* Muestra cada pregunta con su número */}
            </div>
            <div className="options-container">
              {/* Botones de radio para cada opción de respuesta */}
              <label>
                <input
                  type="radio"
                  name={`opcion${index + 1}`}
                  value="5"
                  onChange={handleChange} // Maneja el cambio de selección de opción
                />{" "}
                Me representa mucho
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name={`opcion${index + 1}`}
                  value="4"
                  onChange={handleChange} // Maneja el cambio de selección de opción
                />{" "}
                Me representa
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name={`opcion${index + 1}`}
                  value="3"
                  onChange={handleChange} // Maneja el cambio de selección de opción
                />{" "}
                Me es indiferente
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name={`opcion${index + 1}`}
                  value="2"
                  onChange={handleChange} // Maneja el cambio de selección de opción
                />{" "}
                No me representa
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name={`opcion${index + 1}`}
                  value="1"
                  onChange={handleChange} // Maneja el cambio de selección de opción
                />{" "}
                No me representa en absoluto
              </label>
            </div>
          </div>
        ))}
        <div className="button-container">
          <button type="submit">Enviar</button> {/* Botón para enviar el formulario */}
        </div>
      </form>
      {responseMessage && <p>{responseMessage}</p>} {/* Muestra el mensaje de respuesta si existe */}
      {areaRecomendada && <p>Área recomendada: {areaRecomendada}</p>} {/* Muestra el área recomendada si existe */}
    </>
  );
}

// Exporta el componente para que pueda ser usado en otros archivos
export default Formulario;