import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

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
      <Link to="/Testimonios" className="menu-item">Testimonios de carreras</Link>
      <button class="navbar-toggle">
      <Link to="/Prueba" class="navbar-toggle-icon">&#9776;</Link>
      </button>
    </div>
    </nav>
    </div>
    )   

}

export default Navbar;