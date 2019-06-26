const mongoose = require('mongoose');

    var Event = mongoose.model('Event', {
        Contact_email: { type: String },
        Organization_name: { type: String },
        Contact_person_name: { type: String },
        Contact_phone: { type: Number },
        Alternate_email_id: { type: String },
        Website: { type: String },
        Rating: { type: String },
        City: { type: String },
        Main_image: { type: String },
        Featured_image: { type: String }
    });
    

    module.exports = { Event };