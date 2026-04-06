// Efecto de scroll para la navbar
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(0,0,0,0.95)';
        nav.style.padding = '15px 5%';
    } else {
        nav.style.background = 'rgba(0,0,0,0.9)';
        nav.style.padding = '20px 5%';
    }
});

// Mensaje de bienvenida en consola (Toque Pro)
console.log("%cPATRIC SOFT ® - Proyectos de Élite", "color: #d4af37; font-size: 20px; font-weight: bold;");