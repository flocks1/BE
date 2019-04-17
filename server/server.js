const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const axios = require('./axios/axios');

const db = require('../data/dbConfig');

//Routes
const registerRoute = require('../api/Routes/register/registerRoute');
const loginRoute = require('../api/Routes/login/loginRoute');
const loginWithGoogleRoute = require('../api/Routes/login/loginWithGoogle');

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

server.use('/register', registerRoute);
server.use('/login', loginRoute);
server.use('/login/google', loginWithGoogleRoute);
const Twitter = require('twitter');

server.get('', async (req, res) => {
    try {
        users = await db('Users')
        if (users) {
            res.status(200).json(users);
        }
    } catch (error) {
        res.status(500).json(error);
    }
})

const client = new Twitter({
    consumer_key: '4mHbWoxb3JzcfIFUyjDlyJL6h',
    consumer_secret: 'EJa6iru09FRUVHpI7XRcR4m1DX0XSlZIapxTZLoRabqCIUwgFF',
    bearer_token: 'AAAAAAAAAAAAAAAAAAAAAMQL%2BAAAAAAAOZVd9ROoyKKWxmET%2FkCxS8aqrrw%3DhgbkeyZVPR7P6VtVhaY4mx25Y9aZ88jteTj3fu31vlCJURej8T',
});

// server.get('/tweets', async (req, res) => {
//     try {
//         data = await axios().get('https://api.twitter.com/1.1/trends/place.json?id=1');
//         console.log(data);
//         if (data) {
//             res.status(200).json(data)
//         }
//     } catch (error) {
//         console.log(error);
//     }
// })
server.get('/tweets', async (req, res) => {
    try {
        var params = { screen_name: 'nodejs', id: 1 };
        client.get('/trends/place.json', params, function (error, tweets, response) {
            if (!error) {
                res.status(200).json(tweets);
            } else {
                res.send(error);
            }
        });
    } catch (error) {
        console.log(error);
    }
})


module.exports = server;