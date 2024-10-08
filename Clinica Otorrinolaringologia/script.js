// Registro de Usuário
document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o envio do formulário

    const fullName = document.getElementById("fullName").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const username = document.getElementById("regUsername").value.trim();
    const password = document.getElementById("regPassword").value.trim();

    // Verifica se todos os campos estão preenchidos
    if (!fullName || !cpf || !username || !password) {
        alert("Preencha todos os campos.");
        return;
    }

    // Verifica se já existe um cadastro com o mesmo CPF
    if (localStorage.getItem(cpf)) {
        alert("Já existe um usuário cadastrado com este CPF.");
        return;
    }

    // Cria um objeto para armazenar os dados do usuário
    const user = {
        fullName: fullName,
        username: username,
        password: password
    };

    // Armazena o usuário no localStorage usando o CPF como chave
    localStorage.setItem(cpf, JSON.stringify(user));

    alert("Usuário registrado com sucesso!");
    window.location.href = "login.html"; // Redireciona para a página de login
});

// Login de Usuário
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Obtém os valores dos campos de entrada
    const cpf = document.getElementById('cpfLogin').value;
    const password = document.getElementById('password').value;

    // Verifica se o usuário existe no localStorage
    const user = JSON.parse(localStorage.getItem(cpf));

    if (user && user.password === password) {
        // Login bem-sucedido
        window.location.href = "index.html";
    } else {
        // Login falhou
        alert('CPF ou senha incorretos. Tente novamente.');
    }
});
