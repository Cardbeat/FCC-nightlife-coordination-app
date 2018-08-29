const express = require('express');
const bodyParser = require('body-parser');
const passportSetup = require('./passport-setup');
const authRoutes = require('./oauth-routes');
const yelpSearch = require('./yelp-search');
const mongoose = require('mongoose');
const keys = require('./keys');
const cookieSession = require('cookie-session');
const passport = require('passport');

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

//connect to mongodb
mongoose.connect(keys.mongodb.dbURI, () => {
    console.log('connected to mongodb');
})



app.use('/oauth', authRoutes);
app.use('/yelp', yelpSearch);


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/user', (req, res) => {
    let user = req.isAuthenticated()
    res.send(user);
});


app.set('view engine', 'pug');
app.set('views','./app/client/public/views/');
app.use(express.static('./app/client/public'));



app.listen(port, () => {
    console.log(`server running at ${port} `);
  });