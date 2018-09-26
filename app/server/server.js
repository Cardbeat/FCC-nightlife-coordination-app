const express = require('express');
const bodyParser = require('body-parser');
const passportSetup = require('./passport-setup');
const authRoutes = require('./oauth-routes');
const yelpSearch = require('./yelp-routes');
const mongoose = require('mongoose');
const keys = require('./keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const path = require('path');
const User = require ('./db/user-model');

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

//connect to mongodbS
mongoose.connect(keys.mongodb.dbURI, () => {
    console.log('connected to mongodb');
})


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/results', function(req, res) {
    res.render('index')
  })

app.get('/fav', function(req, res) {
   res.render('index')
  })

app.get('/user', (req, res) => {
    let auth  = req.isAuthenticated()
    let data = {
        user_authenticated: auth,
        favs: req.user.favs
    }
    res.send(data);
});

app.post('/user/add', (req, res) => {
    User.findById(req.user._id, (err, user) => {
        user.favs = [...user.favs, req.body]
        console.log(req.body)
        user.save()
    })
})

app.post('/user/remove' ,(req,res) => {
    User.findById(req.user._id, (err, user) => {
        console.log(req.body)
        let data = [];
        user.favs.map((el, index) => {
            if(el.alias != req.body.alias) {
                data.push(el)
            }
        })
        user.favs = data;
        user.save()
    })
})

app.get('/user/favorites', (req, res) => {
    res.send(req.user.favs)
})

app.use('/oauth', authRoutes);
app.use('/yelp', yelpSearch);


app.set('view engine', 'pug');
app.set('views','./app/client/public/views/');
app.use(express.static('./app/client/public'));



app.listen(port, () => {
    console.log(`server running at ${port} `);
  });