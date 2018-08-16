const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    username: String,
    googleId: String,
    // what save with yelds API
});


const User = mongoose.model('user', userSchema)

module.exports = User;