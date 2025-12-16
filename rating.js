requireAuth();

document.getElementById('ratingSection').addEventListener('submit', function (e) {
    e.preventDefault();

    const rating = document.getElementById('rating').value;

    // Save Rating
    const currentUser = getCurrentUser();
    let users = JSON.parse(localStorage.getItem('users')) || {};

    if (users[currentUser.id]) {
        users[currentUser.id].rating = rating;
        localStorage.setItem('users', JSON.stringify(users));
        alert("Thank you for your feedback!");
        logout(); // Logout and go to index
    }
});
