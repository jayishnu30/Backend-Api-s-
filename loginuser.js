const mongoose = require('mongoose');
var Loginuser = mongoose.model('Loginuser', {
    Name: { type: String },
    Password: { type: String },
});

module.exports = { Loginuser };