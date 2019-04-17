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
        const hashed = bcrypt.hashSync(profile.id, 10);
        profile.id = hashed;
        db('Users').where({ username: profile.displayName }).first()
            .then(user => {
                if (user) {
                    done(null, user);
                } else {
                    db('Users').insert({ username: profile.displayName, password: profile.id })
                        .then(user => {
                            done(null, user);
                        })
                }
            })
    })
)