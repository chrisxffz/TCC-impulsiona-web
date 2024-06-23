function toggleMenu() {
    var menuIcon = document.querySelector('.menu-icon');
    var navbar = document.getElementById('navbar');
    menuIcon.classList.toggle('change');
    navbar.classList.toggle('active');
}

