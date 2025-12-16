requireAuth();

// Populate Options
const selects = ['choice1', 'choice2', 'choice3'];
// Sort departments alphabetically for better UX
const sortedDepts = Object.entries(departments).sort((a, b) => a[1].name.localeCompare(b[1].name));

selects.forEach(id => {
    const select = document.getElementById(id);
    sortedDepts.forEach(([key, dept]) => {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = dept.name;
        select.appendChild(option);
    });
});

// Validation Logic: Prevent Duplicates
function validateChoices() {
    const v1 = document.getElementById('choice1').value;
    const v2 = document.getElementById('choice2').value;
    const v3 = document.getElementById('choice3').value;

    // If empty (default option), ignore validation for that field until submit
    if (!v1 || !v2 || !v3) return true;

    if (v1 === v2 || v1 === v3 || v2 === v3) {
        alert("You must select 3 DIFFERENT fields. Please change your selection.");
        return false;
    }
    return true;
}

document.getElementById('selectionForm').addEventListener('change', () => {
    // Optional: Real-time visual feedback can be added here
});

document.getElementById('selectionForm').addEventListener('submit', function (e) {
    e.preventDefault();

    if (!validateChoices()) return; // Re-run validation on submit

    const choices = [
        document.getElementById('choice1').value,
        document.getElementById('choice2').value,
        document.getElementById('choice3').value
    ];

    // Save to Current User in LocalStorage
    const currentUser = getCurrentUser();
    let users = JSON.parse(localStorage.getItem('users')) || {};

    if (users[currentUser.id]) {
        users[currentUser.id].choices = choices;
        localStorage.setItem('users', JSON.stringify(users));
        alert("Choices saved successfully!");
        window.location.href = 'main_menu.html';
    } else {
        alert("User session error. Please login again.");
        logout();
    }
});
