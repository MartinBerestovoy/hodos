import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">HODOS</div>
      <div className="navbar-links">
        <a href="#sobre-nosotros">Sobre Nosotros</a>
        <a href="#especialistas">Especialistas</a>
        <button className="navbar-toggle">
          <span className="navbar-toggle-icon">&#9776;</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
