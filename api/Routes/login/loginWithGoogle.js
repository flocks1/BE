const passport = require('passport');
const router = require('express').Router();


router.get('', passport.authenticate('google', {
    scope: ['profile']
}));

router.get('/redirect', passport.authenticate('google'), (req, res) => {
    console.log('Hello')
})


module.exports = router;