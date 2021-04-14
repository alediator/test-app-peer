const { PeerServer } = require('peer');

const port = process.env.NODE_PORT ? process.env.NODE_PORT : (process.env.PORT ? process.env.PORT : 3001);

console.log('Running peerjs in ' + port);
const peerServer = PeerServer({ port: port, path: '/' });