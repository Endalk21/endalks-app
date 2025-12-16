// Theme Management
function initTheme() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    }
}

function toggleNightMode() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Auth Helpers
function isLoggedIn() {
    return localStorage.getItem('currentUser') !== null;
}

function requireAuth() {
    if (!isLoggedIn()) {
        window.location.href = 'login.html';
    }
}

function getCurrentUser() {
    const userStr = localStorage.getItem('currentUser');
    return userStr ? JSON.parse(userStr) : null;
}

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

// Global Init
document.addEventListener('DOMContentLoaded', () => {
    initTheme();

    // Inject Night Mode Toggle Button (Desktop/Tablet Fixed)
    // We modify existing logic to assign a class for CSS control
    if (!document.getElementById('nightModeToggle')) {
        const toggleBtn = document.createElement('button');
        toggleBtn.id = 'nightModeToggle';
        toggleBtn.className = 'night-mode-toggle';
        toggleBtn.innerHTML = '🌙';
        toggleBtn.title = 'Toggle Night Mode';
        toggleBtn.onclick = toggleNightMode;
        document.body.appendChild(toggleBtn);
    }

    // === Mobile Hamburger Logic ===
    const header = document.querySelector('header');
    if (header) { // Ensure header exists before adding hamburger
        let nav = document.querySelector('nav');

        // Use Header as relative parent for absolute positioning of hamburger
        if (window.getComputedStyle(header).position === 'static') {
            header.style.position = 'relative';
        }

        const hamburger = document.createElement('button');
        hamburger.className = 'hamburger';
        hamburger.innerHTML = '☰';
        hamburger.onclick = () => {
            if (nav) {
                nav.classList.toggle('active');
                hamburger.innerHTML = nav.classList.contains('active') ? '✕' : '☰';
            }
        };
        header.appendChild(hamburger);

        // Ensure Nav exists
        if (!nav) {
            nav = document.createElement('nav');
            header.appendChild(nav);
        }

        // Add "Home" if missing
        let hasHome = Array.from(nav.querySelectorAll('a')).some(a => a.textContent.includes('Home'));
        if (!hasHome) {
            const homeLink = document.createElement('a');
            homeLink.href = 'index.html';
            homeLink.textContent = 'Home';
            // Insert at beginning
            if (nav.firstChild) nav.insertBefore(homeLink, nav.firstChild);
            else nav.appendChild(homeLink);
        }

        // Add "Logout" if logged in (Mobile Only version to avoid duplicate with desktop header btn)
        if (isLoggedIn()) {
            const logoutLink = document.createElement('a');
            logoutLink.href = '#';
            logoutLink.textContent = 'Logout';
            logoutLink.className = 'mobile-only'; // Defined in CSS
            logoutLink.onclick = (e) => { e.preventDefault(); logout(); };
            nav.appendChild(logoutLink);
        }

        // Add Night Mode toggle to Menu (Mobile Only)
        const nmLink = document.createElement('a');
        nmLink.href = '#';
        nmLink.textContent = 'Dark Mode 🌙';
        nmLink.className = 'mobile-only';
        nmLink.onclick = (e) => {
            e.preventDefault();
            toggleNightMode();
            // Optional: Close menu after toggle?
            // nav.classList.remove('active'); hamburger.innerHTML = '☰';
        };
        nav.appendChild(nmLink);
    }
});

