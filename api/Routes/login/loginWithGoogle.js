const passport = require('passport');
const router = require('express').Router();
const createToken = require('../../webtoken/webtoken');

router.use(passport.initialize());

router.get('', passport.authenticate('google', {
    scope: ['profile']
}));

router.get('/redirect', passport.authenticate('google'), (req, res) => {
    token = createToken(req.user);
    if (token) {
        res.status(200).json({ message: 'You are logged in', token })
    }
})


module.exports = router;