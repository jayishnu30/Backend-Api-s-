var express = require('express');
var router = express.Router();
var { Registeruser } = require('../models/registeruser');

router.get('/', (req, res) => {
    Registeruser.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving User :' + JSON.stringify(err, undefined, 2)); }
    });
});
// Home page route.
router.get('/', function (req, res) {
  res.send('Register Yourself here ');
})

router.post('/', (req, res) => {
    var registeruse = new Registeruser({
    Name: req.body.Name,
    Password: req.body.Password,
    Phone: req.body.Phone,
    Email: req.body.Email,
    });

    registeruse.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Registering the User :' + JSON.stringify(err, undefined, 2)); }
    });
});
// About page route.
router.get('/login', function (req, res) {
  res.send('Please login you email-id and Password');
})


module.exports = router;