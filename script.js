// Toggle Mobile Menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show-menu');
}

// Toggle Search Bar
function toggleSearch() {
    const searchBar = document.querySelector('.search-bar');
    searchBar.style.display = searchBar.style.display === 'block' ? 'none' : 'block';
}
