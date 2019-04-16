const db = require('../data/dbConfig.js');
const bcrypt = require('bcryptjs');

module.exports = register;

async function register(credentials) {
    user = credentials;
    hash = bcrypt.hashSync(credentials.password, 10);
    user.password = hash;
    return db('Users').insert(user);
}