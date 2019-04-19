const router = require('express').Router();
const Twitter = require('twitter');

const client = new Twitter({
    consumer_key: '4mHbWoxb3JzcfIFUyjDlyJL6h',
    consumer_secret: 'EJa6iru09FRUVHpI7XRcR4m1DX0XSlZIapxTZLoRabqCIUwgFF',
    bearer_token: 'AAAAAAAAAAAAAAAAAAAAAMQL%2BAAAAAAAOZVd9ROoyKKWxmET%2FkCxS8aqrrw%3DhgbkeyZVPR7P6VtVhaY4mx25Y9aZ88jteTj3fu31vlCJURej8T',
});

router.get('', async (req, res) => {
    try {
        var params = { screen_name: 'nodejs', id: 1 };
        client.get('/trends/place.json', params, function (error, tweets, response) {
            if (!error) {
                res.status(200).json(tweets[0].trends);
            } else {
                res.send(error);
            }
        });
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;