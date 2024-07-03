import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Inicio from './components/Inicio';
import Formulario from './components/Formulario';
import './App.css';

const App = () => {
  const [showInicio, setShowInicio] = useState(true);

  const handleOkClick = () => {
    setShowInicio(false);
  };

  return (
    <div className="App">
      <Navbar />
      {showInicio ? (
        <Inicio onOkClick={handleOkClick} />
      ) : (
        <Formulario />
      )}
    </div>
  );
};

export default App;
