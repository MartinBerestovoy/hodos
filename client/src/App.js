import React from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Inicio from './components/Inicio';
import Formulario from './components/Formulario';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route path="/formulario" component={Formulario} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
