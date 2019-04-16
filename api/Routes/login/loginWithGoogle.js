const passport = require('passport');
const router = require('express').Router();


router.get('/login/google', passport.authenticate('google', {
    scope: ['profile']
}));


module.exports = router;