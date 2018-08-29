const router = require('express').Router();
const yelp = require('yelp-fusion');
const keys = require('./keys');
 
const client = yelp.client(keys.yelp.clientKey);



// auth login
router.post('/search', (req, res) => {
    client.search({
        location: req.body.city
      }).then(response => {
          res.redirect('/')
          res.send(response.jsonBody.businesses)
      }).catch(e => {
        console.log(e);
      });
});


module.exports = router;