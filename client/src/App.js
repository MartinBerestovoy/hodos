import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Formulario from './Components/Formulario';
import Prueba from './Components/Prueba';
import Inicio from './Components/Inicio';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Prueba />} />  {/* Modificamos para que "Prueba" sea la página predeterminada */}
        <Route path="/about" element={<About />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/prueba" element={<Prueba />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/prediction" component={Prediction} />
      </Routes>
    </Router>
  );
}

export default App;
