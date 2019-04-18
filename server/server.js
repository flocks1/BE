const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const db = require('../data/dbConfig');

//Routes
const registerRoute = require('../api/Routes/register/registerRoute');
const loginRoute = require('../api/Routes/login/loginRoute');
const loginWithGoogleRoute = require('../api/Routes/login/loginWithGoogle');
const trendsRoute = require('../api/Routes/trends/trendsRoute');

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

server.use('/register', registerRoute);
server.use('/login', loginRoute);
server.use('/login/google', loginWithGoogleRoute);
server.use('/trends', trendsRoute);


module.exports = server;