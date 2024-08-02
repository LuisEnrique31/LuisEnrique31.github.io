document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'Estudiante' && password === 'Informatica2024') {
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'introduccion.html';
    } else {
        document.getElementById('errorMessage').textContent = 'Usuario o contraseña incorrectos.';
    }
});

function goToPage(page) {
    window.location.href = page;
}

function logout() {
    localStorage.removeItem('loggedIn');
    window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('loggedIn') !== 'true') {
        window.location.href = 'index.html';
    }
});
