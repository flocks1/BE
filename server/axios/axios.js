const axios = require('axios');

module.exports = function () {

    const instance = axios.create({
        headers: {
            // 'Content-Type': 'application/json',
            Authorization: {
                oauth_consumer_key: "4mHbWoxb3JzcfIFUyjDlyJL6h",
                oauth_signature_method: "HMAC-SHA1",
                oauth_timestamp: "1555535085",
                oauth_nonce: "0lytGMmbTzm",
                oauth_version: "1.0",
                oauth_signature: "ZrSB544GhCVWMjdRSgrtUCY%2FI9o%3D"
            }
        }
    });

    return instance;
}