
const mongoose = require('mongoose');

var Registeruser = mongoose.model('Registeruser', {
    Name: { type: String },
    Password: { type: String },
    Phone: { type: Number},
    Email: { type: String}
});
module.exports = { Registeruser };