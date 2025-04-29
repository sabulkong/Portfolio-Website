// Dark Mode Toggle and Navigation Active State

// Navigation active state
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});

// Theme toggle functionality
const themeToggle = document.querySelector('.theme-toggle');
let darkMode = true;

themeToggle.addEventListener('click', () => {
    if (darkMode) {
        document.body.style.backgroundColor = '#f5f5f5';
        document.body.style.color = '#333';
        darkMode = false;
        themeToggle.textContent = '🌙';
        
        // Update other elements for light mode
        document.querySelectorAll('.nav-links a, .dropdown-content a').forEach(el => {
            el.style.color = '#333';
        });
        
        document.querySelector('.hero-text h2').style.webkitTextStroke = '1px #333';
        document.querySelector('.hero-text p').style.color = '#555';
        
        document.querySelectorAll('.portfolio-btn').forEach(btn => {
            btn.style.color = '#333';
            btn.style.borderColor = '#333';
        });
    } else {
        document.body.style.backgroundColor = '#0f2330';
        document.body.style.color = 'white';
        darkMode = true;
        themeToggle.textContent = '🌓';
        
        // Reset to dark mode
        document.querySelectorAll('.nav-links a, .dropdown-content a').forEach(el => {
            el.style.color = 'white';
        });
        
        document.querySelector('.hero-text h2').style.webkitTextStroke = '1px white';
        document.querySelector('.hero-text p').style.color = '#ccc';
        
        document.querySelectorAll('.portfolio-btn').forEach(btn => {
            btn.style.color = 'white';
            btn.style.borderColor = 'white';
        });
    }
});

// Make buttons interactive
document.querySelectorAll('.hire-me-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Thank you for your interest! Let\'s discuss your project.');
    });
});

document.querySelector('.portfolio-btn').addEventListener('click', () => {
    alert('Redirecting to portfolio page...');
});

// Side panel interactions
document.querySelectorAll('.side-panel button').forEach(btn => {
    btn.addEventListener('click', function() {
        alert(`${this.getAttribute('title')} action triggered!`);
    });
});
