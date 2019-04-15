const express = require('express');
const register = require('./registerRouteHelper');
const bcrypt = require('bcryptjs');

const route = express.Router();

route.post('', async (req, res) => {
    try {
        const credentials = req.body;
        hash = bcrypt.hashSync(credentials.password, 10);
        credentials.password = hash;
        user = await register(credentials);
        if (user) {
            res.status(200).json(user);
        }
    } catch (error) {
        res.status(500).json(error);
    }
})