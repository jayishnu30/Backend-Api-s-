var express = require('express');
var router = express.Router();
var { User} = require('../models/user');


router.get('/', (req, res) => {
    User.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving User :' + JSON.stringify(err, undefined, 2)); }
    });
});
// Home page route.
router.get('/userlogin', function (req, res) {
    res.send('Please login you email-id and Password');
  })
  

  router.post('/userlogin', (req, res) => {
    var userlog = new User({
    Name: req.body.Name,
    Password: req.body.Password,
    Phone: req.body.Phone,
    Email: req.body.Email,
    });

    userlog.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;