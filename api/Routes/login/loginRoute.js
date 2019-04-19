const express = require('express');
const login = require('./loginRouteHelper');

const routes = express.Router();

routes.post('/', async (req, res) => {
    try {
        message = await login(req.body);
        if (message) {
            res.status(200).json(message);
        }
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = routes;