// Inicialização da biblioteca de animações AOS
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({ 
        duration: 1000, 
        once: true 
    });
});

// Fechar menu mobile automaticamente ao clicar em um link
const navLinks = document.querySelectorAll('.nav-link');
const menuToggle = document.getElementById('navbarNav');

if (menuToggle) {
    const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false});
    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 992) {
                bsCollapse.hide();
            }
        });
    });
}