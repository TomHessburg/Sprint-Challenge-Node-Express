const express = require("express");

const server = express();
const projectRoute = require('./routers/projectRouter');

server.use(express.json());
server.use('/api/project', projectRoute);


server.get('/', (req, res) => {
    res.send(`
      <h2>Tom Hessburg Spring Challenge API 1</h2>
      `);
  });

  module.exports = server;