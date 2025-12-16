requireAuth();
const user = getCurrentUser();
if (user) {
    document.getElementById('userName').textContent = user.name;
    document.getElementById('userId').textContent = user.id;
} else {
    // Should be handled by requireAuth but safe check
    window.location.href = 'login.html';
}

document.getElementById('logoutBtn').addEventListener('click', logout);
