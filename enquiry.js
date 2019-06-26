const mongoose = require('mongoose');

var Enquiry = mongoose.model('Enquiry', {
    Enquiry_id: { type: String },
    Service: { type: String },
    Budget: { type: Number},
    City: { type: String}
});

module.exports = { Enquiry };