const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const db = require('../../data/dbConfig');
const bcrypt = require('bcryptjs');

passport.use(
    new GoogleStrategy({
        callbackURL: '/login/google/redirect',
        clientID: keys.google.client_id,
        clientSecret: keys.google.client_secret
    }, (accessToken, refreshToken, profile, done) => {
        db('Users').where({ username: profile.displayName }).then(user => {
            if (user) {
                console.log(user);
            } else {
                db('Users').insert({ username: profile.displayName, })
            }
            console.log(profile);
        })
    })
)