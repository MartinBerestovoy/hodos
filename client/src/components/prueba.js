import React from 'react'; // Importa React para poder usar JSX y crear componentes
import { Link } from 'react-router-dom'; // Importa el componente Link de React Router para manejar la navegación
import './Prueba.css';

const Prueba = () => { // Define el componente funcional Prueba
  return (
    <div>
      <header className="header fade-in"> {/* Contenedor del encabezado con clases para estilos */}
      <img className="icon" src="/LOGO.jpg" alt="HODOS" />
        <nav className="navbar"> {/* Barra de navegación */}
          <ul>
            <li><Link to="/about">Sobre Nosotros</Link></li> {/* Enlaces que navegan dentro de la app React */}
            <li><Link to="/areas-de-interes">Áreas de Interés</Link></li>
            <li><Link to="/especialistas">Especialistas</Link></li>
          </ul>
        </nav>
      </header>

      <section className="intro fade-in"> {/* Sección introductoria */}
        <div className="intro-content">
          <h1>Screening Vocacional</h1> {/* Título principal */}
          <Link to="/Inicio" className="button">Empezar</Link> {/* Botón que navega a la página de inicio */}
        </div>
        <div className="intro-image">
          <img src="/imagen1.jpg" alt="Imagen de introducción" /> {/* Imagen introductoria */}
        </div>
      </section>

      <section className="section fade-in" id="product-section"> {/* Sección de productos */}
        <h2 className="section-title">Producto</h2>
        <div className="card-container">
          <div className="card">
            <div className="card-content">
              <img className="icon" src="/Productos1.jpg" alt="Icon 1" /> {/* Icono para la tarjeta */}
              <p className="card-title">Evaluación de Intereses</p> {/* Título de la tarjeta */}
            </div>
            <div className="card-content">
              <img className="icon" src="/Productos2.jpg" alt="Icon 2" />
              <p className="card-title">Carreras y Universidades</p>
            </div>
            <div className="card-content">
              <img className="icon" src="/Productos3.jpg" alt="Icon 3" />
              <p className="card-title">Testimonios y Experiencias</p>
            </div>
            <div className="card-content">
              <img className="icon" src="/Productos4.jpg" alt="Icon 4" />
              <p className="card-title">Consulta con Orientadores</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section fade-in" id="about-section"> {/* Sección "Sobre Nosotros" */}
        <h2 className="section-title">Sobre Nosotros</h2>
        <div className="card-container">
          <div className="card">
            <div className="card-content">
              <img className="profile-photo" src="/Nombres1.jpg" alt="Francisco Caruso" /> {/* Foto del perfil */}
              <p className="profile-name">Lic. Francisco Caruso</p> {/* Nombre del perfil */}
            </div>
            <div className="card-content">
              <img className="profile-photo" src="/Nombres2.jpg" alt="Martina Pirolo" />
              <p className="profile-name">Lic. Martina Pirolo</p>
            </div>
            <div className="card-content">
              <img className="profile-photo" src="/Nombres3.jpg" alt="Emma Morvillo" />
              <p className="profile-name">Lic. Emma Morvillo</p>
            </div>
            <div className="card-content">
              <img className="profile-photo" src="/Nombres4.jpg" alt="Martin Berestovoy" />
              <p className="profile-name">Lic. Martin Berestovoy</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section fade-in" id="specialists-section"> {/* Sección de especialistas */}
        <h2 className="section-title">Especialistas</h2>
        <div className="card-container">
          <div className="card">
            <div className="card-content">
              <img className="profile-photo" src="path_to_photo5" alt="Fernanda Cabalen" />
              <p className="profile-name">Lic. Fernanda Cabalen</p>
            </div>
            <div className="card-content">
              <img className="profile-photo" src="path_to_photo6" alt="Hernan Caruso" />
              <p className="profile-name">Lic. Hernan Caruso</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Prueba; // Exporta el componente para que pueda ser utilizado en otros archivos
