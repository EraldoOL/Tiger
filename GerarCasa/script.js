document.getElementById('loginBtn').addEventListener('click', login);
document.getElementById('updateLinkBtn').addEventListener('click', updateLink);

const adminPassword = 'admin123';  // Senha para acesso administrativo
let currentLink = localStorage.getItem('currentLink') || 'https://paraisobets.com/?c=01748d25-5a4c-4aed-8d72-ce4c8cf8bf3d';  // Carrega o link do localStorage ou usa o link inicial

function displayLink() {
    document.getElementById('link').innerText = currentLink;
    document.getElementById('openLinkBtn').onclick = () => window.open(currentLink, '_blank');
}

function login() {
    const password = document.getElementById('adminPassword').value;
    if (password === adminPassword) {
        document.getElementById('adminPanel').style.display = 'block';
    } else {
        alert('Senha incorreta');
    }
}

function updateLink() {
    const newLink = document.getElementById('newLink').value;
    if (newLink) {
        currentLink = newLink;
        localStorage.setItem('currentLink', currentLink);
        displayLink();
        alert('Link atualizado com sucesso!');
    } else {
        alert('Por favor, insira um novo link.');
    }
}

// Exibe o link atual ao carregar a página
displayLink();