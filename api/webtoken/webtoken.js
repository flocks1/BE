const jwt = require('jsonwebtoken');

const createToken = user => {
    const payload = {
        user_id: user.user_id,
        username: user.username
    };
    const options = {
        expiresIn = '12h'
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, options);
    return token;
}