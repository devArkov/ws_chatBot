// WS server
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8008 });

wss.on('connection', () => {
    console.log('Server: New client connected.');

    wss.on('close', () => {
        console.log('Client has disconnected.');
    });
});