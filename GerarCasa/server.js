const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

let linkAtual = "http://example.com"; // Link inicial

// Servir arquivos estáticos da pasta GerarCasa
app.use(express.static(path.join(__dirname, 'GerarCasa')));

io.on('connection', (socket) => {
    console.log('Novo cliente conectado');
    socket.emit('atualizarLink', linkAtual);

    socket.on('atualizarLink', (novoLink) => {
        linkAtual = novoLink;
        io.emit('atualizarLink', linkAtual); // Envia o novo link para todos os clientes conectados
    });

    socket.on('disconnect', () => {
        console.log('Cliente desconectado');
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
