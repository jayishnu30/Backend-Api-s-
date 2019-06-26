const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

var User = mongoose.model('User', {
    Name: { type: String },
    Password: { type: String },
    Phone: { type: Number},
    Email: { type: String}
});
module.exports = { User };