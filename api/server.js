const express = require('express');



const server = express();
server.use(express.json());


server.get('/', (req, res) => {
  res.send(`
  <h1>Users API</h1>
  <p>Welcome users!</p>
  `);
});

server.use((error, req, res, next) => {
  res.status(error.status || 500).json({message: error.message, stack: error.stack});
});

module.exports = server;