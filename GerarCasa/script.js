const serverIP = '192.168.0.101';  // Endereço IP do servidor
const adminPassword = 'admin123';  // Senha para acesso administrativo

document.getElementById('loginBtn').addEventListener('click', login);
document.getElementById('updateLinkBtn').addEventListener('click', updateLink);

async function fetchLink() {
    try {
        const response = await fetch(`http://${serverIP}:3000/link`);
        const data = await response.json();
        displayLink(data.link);
    } catch (error) {
        console.error('Erro ao buscar o link:', error);
    }
}

function displayLink(link) {
    document.getElementById('link').innerText = link;
    document.getElementById('openLinkBtn').onclick = () => window.open(link, '_blank');
}

function login() {
    const password = document.getElementById('adminPassword').value;
    if (password === adminPassword) {
        document.getElementById('adminPanel').style.display = 'block';
    } else {
        alert('Senha incorreta');
    }
}

async function updateLink() {
    const newLink = document.getElementById('newLink').value;
    if (newLink) {
        try {
            console.log('Tentando atualizar o link para:', newLink);
            const response = await fetch(`http://${serverIP}:3000/link`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ link: newLink })
            });
            const data = await response.json();
            if (response.ok) {
                alert(data.message);
                displayLink(data.link);
            } else {
                throw new Error(data.message || 'Erro desconhecido');
            }
        } catch (error) {
            console.error('Erro ao atualizar o link:', error);
            alert('Erro ao atualizar o link. Veja o console para mais detalhes.');
        }
    } else {
        alert('Por favor, insira um novo link.');
    }
}

// Carrega o link ao inicializar a página
fetchLink();