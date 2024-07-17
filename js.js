window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

  // scroll trans
ScrollReveal({ 
    distance: '80px',
    duration: 1400,
});

ScrollReveal().reveal('.name', { delay: 250, origin: 'left', interval: 200});
ScrollReveal().reveal('.right', { delay: 250, origin: 'right'});
ScrollReveal().reveal('.top', { delay: 250, origin: 'top', interval: 100});