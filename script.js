// Get the navbar
const navbar = document.getElementById('navbar');

// Add an event listener for scroll events
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
