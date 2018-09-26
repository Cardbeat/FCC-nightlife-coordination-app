const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    username: String,
    googleId: String,
    favs: [{coordinates: {
        longitude: Number,
        latitude: Number
    },
    alias: String,
    phone: String,
    rating: String,
    location: {
        address1: String
    },
    image_url: String,
    url: String,
    review_count: String
    }
]
    // what save with yelds API
});


const User = mongoose.model('user', userSchema)

module.exports = User;