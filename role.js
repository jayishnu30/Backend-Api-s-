const mongoose = require('mongoose');

var Role = mongoose.model('Role', {
    Role_id: { type: Number },
    Role_type: { type: String }
});

module.exports = { Role };