const db = require('../../../data/dbConfig');
const bcrypt = require('bcryptjs');
const createToken = require('../../webtoken/webtoken');

async function login(user) {
    newUser = await db('Users').where({ username: user.username }).first();
    if (newUser) {
        if (user && bcrypt.compareSync(user.password, newUser.password)) {
            const token = createToken(user);
            return {
                message: 'You are logged in',
                token,
            }
        }
    }
}

module.exports = login;