document.addEventListener('DOMContentLoaded', function() {
    console.log("välkommen")
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');
    

    hamburgerMenu.addEventListener('click', function() {
        console.log("ghdjggdsj")
        hamburgerMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburgerMenu.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});