// ===================================
// NEW: Light/Dark Mode Toggle Logic
// ===================================
const themeCheckbox = document.getElementById('theme-checkbox');
const body = document.body;

function applyTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        if(themeCheckbox) themeCheckbox.checked = true;
    } else {
        body.classList.remove('dark-mode');
        if(themeCheckbox) themeCheckbox.checked = false;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
});

if (themeCheckbox) {
    themeCheckbox.addEventListener('change', () => {
        if (themeCheckbox.checked) {
            applyTheme('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            applyTheme('light');
            localStorage.setItem('theme', 'light');
        }
    });
}
// Scroll Animation Logic (Optimized)
// ===================================
const elementsToAnimate = document.querySelectorAll('.fade-in-section');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, {
    threshold: 0.1 
});

elementsToAnimate.forEach(element => {
    observer.observe(element);
});

// ===================================
// Hamburger Menu Logic
// ===================================
const hamburgerButton = document.getElementById('hamburger-button');
const navLinks = document.getElementById('nav-links');

hamburgerButton.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    hamburgerButton.classList.toggle('is-active');
});