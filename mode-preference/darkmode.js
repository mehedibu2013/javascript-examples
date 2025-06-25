const toggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check local storage for dark mode preference
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
}

toggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});
// Ensure the toggle reflects the current state
if (body.classList.contains('dark-mode')) {
    toggle.checked = true;
}