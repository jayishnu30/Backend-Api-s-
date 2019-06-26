var express = require('express');
var router = express.Router();
var { Event } = require('../models/event');
router.get('/', (req, res) => {
    Event.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving User :' + JSON.stringify(err, undefined, 2)); }
    });
});
// Home page route.
router.get('/userlogin', function (req, res) {
    res.send('Please login you email-id and Password');
  })

  router.post('/userlogin', (req, res) => {
    var logineve = new Event({
    Contact_email: req.body.Contact_email,
    Organization_name: req.body.Organization_name,
    Contact_person_name: req.body.Contact_person_name,
    Alternate_email_id: req.body.Alternate_email_id,
    Website: req.body.Website,
    City: req.body.City,
    Main_image: req.body.Main_image,
    Featured_image: req.body.Featured_image,

        });


        logineve.save((err, doc) => {
            if (!err) { res.send(doc); }
            else { console.log('Error in Employee Save :' + JSON.stringify(err, undefined, 2)); }
    

});
});
  

 

module.exports = router;