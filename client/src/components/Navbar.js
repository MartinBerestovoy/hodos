import React from 'react';
import './Inicio.css';

function Navbar() {
    return (
    <div>
        <nav class="navbar">
    <div class="navbar-brand">HODOS</div>
    <div class="navbar-links">
      <a href="SobreNosotros.html" class="button">Sobre Nosotros</a>
      <a href="#especialistas">Especialistas</a>
      <button class="navbar-toggle">
        <span class="navbar-toggle-icon">&#9776;</span>
      </button>
    </div>
    </nav>
    </div>
    )   

}

export default Navbar;