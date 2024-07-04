import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Formulario from './components/Formulario';  // Importa tu componente de formulario

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/formulario" component={Formulario} />  // Añade la ruta para el formulario
      </Switch>
    </Router>
  );
}

export default App;
