const express = require('express');
const cors = require('cors');
const logger = require('morgan');

const router = require("./routes")
const server = express();

server.use(logger(server.get('env') === 'development' ? 'dev' : 'short'));
server.use(cors());
server.use(express.json());

server.use('/api/contacts', router);

server.use((req, res) => {
  res.status(403).json({ message: 'Forbidden. Use /api/contacts.' });
});

server.use((err, req, res, next) => {
  res.status(500).json({ "your error": err });
});

module.exports = server;
