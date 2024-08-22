// Espera a que el contenido del DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el botón de la navbar
    const toggleButton = document.querySelector('.navbar-toggle');
    const navbarLinks = document.querySelector('.navbar-links');
  
    // Añade un evento de clic al botón de la navbar
    toggleButton.addEventListener('click', function() {
      // Alterna la visibilidad de los enlaces de la navbar
      navbarLinks.classList.toggle('active');
    });
  
    // Opcional: Scroll suave al hacer clic en los enlaces de la navbar
    const links = document.querySelectorAll('.navbar-links a');
    links.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault(); // Evita el comportamiento por defecto del enlace
        const target = this.getAttribute('href'); // Obtiene el valor del atributo href
  
        // Desplazamiento suave a la sección
        document.querySelector(target).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });
  