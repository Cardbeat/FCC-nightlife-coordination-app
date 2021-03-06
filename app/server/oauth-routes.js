const router = require('express').Router();
const passport = require('passport');


// auth login
router.get('/login', (req, res) => {
    res.send('login')
});


// auth logout 
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('https://sleepy-savannah-47566.herokuapp.com');
});


// auth with google
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}))

// callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google'), (req,res) => {
    res.redirect('https://sleepy-savannah-47566.herokuapp.com/results')
});


module.exports = router;