// script.js

document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o envio do formulário

    const username = document.getElementById("regUsername").value;
    const password = document.getElementById("regPassword").value;

    // Armazena o usuário e senha no localStorage
    localStorage.setItem(username, password);

    alert("Usuário registrado com sucesso!");
    window.location.href = "login.html"; // Redireciona para a página de login
});

// script.js

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o envio do formulário

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Verifica se o usuário está registrado
    const storedPassword = localStorage.getItem(username);

    if (storedPassword && storedPassword === password) {
        alert("Login bem-sucedido!");
        window.location.href = "home.html"; // Redireciona para a página inicial
    } else {
        alert("Usuário ou senha incorretos. Verifique se você já se registrou.");
    }
});
