//imports
const express = require('express');
const usersRouter = require('./users/users-router');
const loginRouter = require('./login/login-router');

//server setup & middleware
const server = express();
server.use(express.json());

//server routers
server.use('/api/users', usersRouter);
server.use('/api/login', loginRouter);


server.get('/', (req, res) => {
  res.send(`
  <h1>Users API</h1>
  <p>Welcome users!</p>
  `);
});


//error handler
server.use((error, req, res, next) => {
  res.status(error.status || 500).json({message: error.message, stack: error.stack});
});

module.exports = server;