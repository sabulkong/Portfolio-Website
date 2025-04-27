// Theme Toggle
const themeSwitcher = document.getElementById('themeSwitcher');
const body = document.body;

themeSwitcher.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    if(currentTheme === 'dark') {
        body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});

// Search Toggle
const searchIcon = document.querySelector('.search-icon');
const searchInput = document.querySelector('.search-input');

searchIcon.addEventListener('click', () => {
    searchInput.style.display = searchInput.style.display === 'block' ? 'none' : 'block';
});

// Set initial theme
const savedTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', savedTheme);