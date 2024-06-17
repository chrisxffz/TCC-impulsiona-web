function toggleMenu() {
    var menuIcon = document.querySelector('.menu-icon');
    var menu = document.getElementById('menu');
    menuIcon.classList.toggle('change');
    menu.classList.toggle('active');
}