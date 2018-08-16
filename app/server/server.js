const express = require('express');
const bodyParser = require('body-parser');
const passportSetup = require('./passport-setup');
const authRoutes = require('./oauth-routes');
const mongoose = require('mongoose');
const keys = require('./keys');


//connect to mongodb
mongoose.connect(keys.mongodb.dbURI, () => {
    console.log('connected to mongodb');
})


const app = express();
const port = process.env.PORT || 3000;


app.use('/oauth', authRoutes);


app.get('/', (req, res) => {
    res.render('index');
});

app.set('view engine', 'pug');
app.set('views','./app/client/public/views/');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('./app/client/public'));



app.listen(port, () => {
    console.log(`server running at ${port} `);
  });