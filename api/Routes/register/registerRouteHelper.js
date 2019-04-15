const db = require('../data/dbConfig.js');

module.exports = register;

async function register(user) {
    return db('Users').insert(user);
}