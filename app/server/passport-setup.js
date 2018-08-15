const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys')

passport.use(
    new GoogleStrategy({
    // options for the google strat
    callbackURL: 'https://sleepy-savannah-47566.herokuapp.com/oauth/google/redirect',
    clientID: keys.google.clientID ,
    clientSecret: keys.google.clientSecret
    }, () => {
    })
);