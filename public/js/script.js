document.addEventListener('DOMContentLoaded', function() {
    // Obtén el elemento del botón de la hamburguesa
    var navbarBurger = document.querySelector('.navbar-burger');
  
    // Obtén el objetivo que la hamburguesa controla
    var target = document.getElementById(navbarBurger.dataset.target);
  
    // Añade un evento de escucha de clic en la hamburguesa
    navbarBurger.addEventListener('click', function() {
        // Toggle the 'is-active' class on both the burger and the target element
        navbarBurger.classList.toggle('is-active');
        target.classList.toggle('is-active');
    });
});

