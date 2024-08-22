import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
    <div>
        <nav class="navbar">
    <div className="logo">
    <img src="/LOGO.jpg" alt="HODOS"/>
    </div>
    <div class="navbar-menu">
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