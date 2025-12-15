// Selecciono el botón hamburguesa
const navToggle = document.querySelector('.nav-toggle');

// la lista de enlaces del menú
const navList = document.querySelector('.nav-list');
// cuando hace  click en el botón hamburguesa
navToggle.addEventListener('click', () => {
    // Al hacer click, añadimos o quitamos la clase que muestra/oculta el menú
    navList.classList.toggle('nav-list--open');
});
