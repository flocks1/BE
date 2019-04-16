const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

//Routes
const registerRoute = require('../api/Routes/register/registerRoute');

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

server.use('/register', registerRoute);


module.exports = server;