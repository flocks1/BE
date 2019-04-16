const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const db = require('../data/dbConfig');

//Routes
const registerRoute = require('../api/Routes/register/registerRoute');
const loginRoute = require('../api/Routes/login/loginRoute');

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

server.use('/register', registerRoute);
server.use('/login', loginRoute);

server.get('/user', async (req, res) => {
    try {
        users = await db('Users')
        if (users) {
            res.status(200).json(users);
        }
    } catch (error) {
        res.status(500).json(error);
    }
})


module.exports = server;