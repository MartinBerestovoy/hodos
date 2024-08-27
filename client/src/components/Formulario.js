import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import MainHeading from "./MainHeading";
import History from "./History";
import TestTaken from "./TestTaken";
import Faqs from "./Faqs";
import Footer from "./Footer";

const Home = () => {

  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "1. ¿Qué tan interesado estás en la tecnología?",
      options: ["Me gusta mucho", "Me gusta", "Me es indiferente", "No me gusta"],
    },
    {
      id: 2,
      question: "2. ¿Qué tan interesado estás en los deportes?",
      options: ["Me gusta mucho", "Me gusta", "Me es indiferente", "No me gusta"],
    },
    {
      id: 3,
      question: "3. ¿Qué tan interesado estás en la lectura?",
      options: ["Me gusta mucho", "Me gusta", "Me es indiferente", "No me gusta"],
    },
    {
      id: 4,
      question: "4. ¿Qué tan interesado estás en viajar?",
      options: ["Me gusta mucho", "Me gusta", "Me es indiferente", "No me gusta"],
    },
    {
      id: 5,
      question: "5. ¿Qué tan interesado estás en la música?",
      options: ["Me gusta mucho", "Me gusta", "Me es indiferente", "No me gusta"],
    },
  ]);

  const [enableSubmit, setEnableSubmit] = useState(false);

  const [final, setFinal] = useState([]);

  const [selections, setSelections] = useState(Array(5).fill(null));

  const history = useHistory();


  const handleChange = (index, event) => {
    const updatedSelections = [...selections];
    updatedSelections[index] = event.target.value;
    setSelections(updatedSelections);

    setEnableSubmit(updatedSelections.every(selection => selection !== null));
  };


  const submitHandler = async (event) => {
    event.preventDefault();

    if (!enableSubmit) return;

    try {
      const result = calculatePersonalityResults(selections);
      const finalPrediction = await personalPredictor(result);

      if (finalPrediction) {
        setFinal(finalPrediction);
        history.push({
          pathname: "/predictions",
          state: { result, finalPrediction },
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
    }
  };

  const calculatePersonalityResults = (selections) => {
    const traits = ["Tecnología", "Deportes", "Lectura", "Viajar", "Música"];
    const scores = traits.map(trait => filteration(selections, trait));
    return scores;
  };

  const filteration = (selections, trait) => {
    return selections.reduce((acc, selection, index) => {
      acc += selection === "Me gusta mucho" ? 4 : selection === "Me gusta" ? 3 : selection === "Me es indiferente" ? 2 : 1;
      return acc;
    }, 0);
  };


  const personalPredictor = async (result) => {
    try {
      const response = await axios.post('https://hodos-server-git-main-martinberestovoys-projects.vercel.app/guardar-informacion', { result });
      return response.data.finalPrediction;
    } catch (error) {
      throw new Error('Error contacting the prediction API');
    }
  };

  return (
    <div id="home">
      <Header />
      <MainHeading />
      <History />
      <TestTaken />
      <form onSubmit={submitHandler}>
        {questions.map((question, index) => (
          <div key={question.id} className="question-container">
            <p>{question.question}</p>
            <div className="options-container">
              {question.options.map((option, i) => (
                <label key={i}>
                  <input
                    type="radio"
                    name={`question${question.id}`}
                    value={option}
                    checked={selections[index] === option}
                    onChange={(e) => handleChange(index, e)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))}
        <
 export default Formulario;