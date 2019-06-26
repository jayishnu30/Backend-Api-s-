const mongoose = require('mongoose');

var Employee = mongoose.model('Employee', {
    Category_id: { type: String },
    Category: { type: String },
    Sub_Category: { type: String },
    Budget: { type: Number }
});
 
