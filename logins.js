var express = require('express');
var router = express.Router();
var { Loginuser } = require('../models/loginuser');

router.get('/', (req, res) => {
    Loginuser.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving User :' + JSON.stringify(err, undefined, 2)); }
    });
});
// Home page route.
router.get('/login', function (req, res) {
    res.send('Please login you email-id and Password');
  })
  

router.post('/login', (req, res) => {
    var logi = new Loginuser({
    Name: req.body.Name,
    Password: req.body.Password,
    });

    logi.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Registering the User :' + JSON.stringify(err, undefined, 2)); }
    });
});


module.exports = router;