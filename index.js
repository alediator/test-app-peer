const { PeerServer } = require('peer');

const port = process.env.NODE_PORT ? process.env.NODE_PORT : (process.env.PORT ? process.env.PORT : 3001);
const debug = process.env.DEBUG ? process.env.DEBUG : true;

console.log('Running peerjs in ', + port, ' debug=', debug);
const peerServer = PeerServer({ 
    port: port, 
    path: '/',
    debug: debug
});