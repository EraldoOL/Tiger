const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors'); // Adiciona o módulo CORS

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

let currentLink = "http://example.com"; // Link inicial

// Middleware para servir arquivos estáticos da pasta GerarCasa
app.use(express.static(path.join(__dirname, 'Tiger', 'GerarCasa')));
app.use(bodyParser.json());
app.use(cors()); // Habilita CORS para todas as rotas

// Endpoint para obter o link atual
app.get('/link', (req, res) => {
    console.log('Solicitação GET recebida em /link');
    res.json({ link: currentLink });
});

// Endpoint para atualizar o link
app.post('/link', (req, res) => {
    console.log('Solicitação POST recebida em /link', req.body);
    const { link } = req.body;
    if (link) {
        currentLink = link;
        io.emit('updateLink', currentLink); // Envia o novo link para todos os clientes conectados
        res.json({ message: 'Link atualizado com sucesso!', link: currentLink });
    } else {
        res.status(400).json({ message: 'Link inválido' });
    }
});

io.on('connection', (socket) => {
    console.log('Novo cliente conectado');
    socket.emit('updateLink', currentLink);

    socket.on('disconnect', () => {
        console.log('Cliente desconectado');
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));