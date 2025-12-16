document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const fullname = document.getElementById('fullname').value;
    const studentid = document.getElementById('studentid').value;
    const password = document.getElementById('password').value;

    // Simple validation
    const idPattern = /^NASCR\d{4}\/\d{2}$/;
    if (!idPattern.test(studentid)) {
        alert("Invalid ID Format. Please use NASCRxxxx/yy");
        return;
    }

    // Check if user exists
    let users = JSON.parse(localStorage.getItem('users')) || {};
    if (users[studentid]) {
        alert("User with this ID already exists!");
        return;
    }

    // Save user
    users[studentid] = {
        name: fullname,
        password: password,
        choices: [],
        rating: null
    };
    localStorage.setItem('users', JSON.stringify(users));

    alert("Registration Successful!");
    window.location.href = 'login.html';
});
