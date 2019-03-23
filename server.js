const express = require("express");
const cors = require("cors");

const server = express();
const projectRoute = require('./routers/projectRouter');
const actionsRouter = require("./routers/actionRouter");

server.use(cors());
server.use(express.json());
server.use('/api/project', projectRoute);
server.use("/api/actions", actionsRouter);


server.get('/', (req, res) => {
    res.send(`
      <h2>Tom Hessburg Spring Challenge API 1</h2>
      `);
  });

  module.exports = server;