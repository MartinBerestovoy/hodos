import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
    <div>
        <nav class="navbar">
    <div className="logo">
    <img src="/LOGO.jpg" alt="HODOS"/>
    </div>
    <div class="menu">
      <span className="menu-item">Sobre Nosotros</span>
      <span className="menu-item">Especialistas</span>
      <span className="menu-item">Areas de Interes</span>
      <button class="navbar-toggle">
        <span class="navbar-toggle-icon">&#9776;</span>
      </button>
    </div>
    </nav>
    </div>
    )   

}

export default Navbar;