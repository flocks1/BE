const passport = require('passport');
const router = require('express').Router();


router.get('', passport.authenticate('google', {
    scope: ['profile']
}));

router.get('/redirect', passport.authenticate('google'), (req, res) => {
    res.send('You are logged in now');
})


module.exports = router;