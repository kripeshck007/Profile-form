const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/profile', { useNewUrlParser: true });
const Schema = mongoose.Schema;

var NewProfileSchema = new Schema({

    firstname: String,
    email: String,
    lastname: String,
    biography: String,
    profileImageUrl: String,
    twitter: String,
    facebook: String,
    googleplus: String

});

var Profiledata = mongoose.model('profile', NewProfileSchema);

module.exports = Profiledata;