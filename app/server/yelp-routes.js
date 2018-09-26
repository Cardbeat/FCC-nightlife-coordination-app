const router = require('express').Router();
const yelp = require('yelp-fusion');
const keys = require('./keys');
 
const client = yelp.client(keys.yelp.clientKey);



// auth login
router.post('/search', (req, res) => {
    client.search({
        location: req.body.city
      }).then(response => {
          res.send(response.jsonBody.businesses)
      }).catch(e => {
        console.log(e);
      });
});

router.get('/search/favorites', (req, res) => {
    let favorites = req.user.favs
    console.log(favorites)
    let data = favorites.map(fav => {
        client.business(fav).then(response => {
            res.send(response.jsonBody);
          }).catch(e => {
            console.log(e);
          });
    })
    
});

// need to search about passing data 
// get business info and alocate at redux store 
// change path with react router


module.exports = router;