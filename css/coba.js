document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('active');
});

function toggleMenu() {
    const navUl = document.querySelector('nav ul');
    navUl.classList.toggle('active');
}

// Get the current URL path (e.g., 'coba.html', 'about.html', etc.)
const currentPage = window.location.pathname.split("/").pop();

// Get all the menu links
const menuLinks = document.querySelectorAll('#menu li a');

// Loop through each link and check if its href matches the current page URL
menuLinks.forEach(link => {
    if(link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});
