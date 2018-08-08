const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')


const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.render('index')
})

app.set('view engine', 'pug');
app.set('views','./app/client/public/views/');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('./app/client/public'));



app.listen(port, () => {
    console.log(`server running at ${port} `);
  });