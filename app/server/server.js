import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();
const port = 3000 || process.env.NODE_ENV;

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