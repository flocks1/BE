const db = require('../../../data/dbConfig');
const bcrypt = require('bcryptjs');



function register(user) {
    hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;
    return db('Users').insert(user);
}

module.exports = register;