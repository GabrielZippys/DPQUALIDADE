function checkAuth() {
    // Verifica se o token de login NÃO existe no localStorage
    if (!localStorage.getItem('googleToken')) {
        // Se não existir, avisa o usuário e redireciona para o login
        alert("Acesso negado. Por favor, faça o login.");
        window.location.href = 'login.html';
    }
}

function logout() {
    // Remove o token de login do localStorage
    localStorage.removeItem('googleToken');
    // Envia o usuário de volta para a tela de login
    window.location.href = 'login.html';
}