if (isLoggedIn()) {
    window.location.href = 'main_menu.html';
}

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const studentid = document.getElementById('studentid').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users')) || {};
    const user = users[studentid];

    if (user && user.password === password) {
        // Login Success
        localStorage.setItem('currentUser', JSON.stringify({ id: studentid, name: user.name }));
        window.location.href = 'main_menu.html';
    } else {
        alert("Invalid Student ID or Password");
    }
});
