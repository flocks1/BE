const express = require('express');
const register = require('./registerRouteHelper');

const route = express.Router();

route.post('', async (req, res) => {
    try {
        user = await register(credentials);
        if (user) {
            res.status(200).json(user);
        }
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = route;