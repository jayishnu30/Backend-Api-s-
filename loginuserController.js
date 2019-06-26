const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var bcrypt = require('bcrypt');
var { Loginuser } = require('../models/loginuser');

router.get('/', (req, res) => {
    Loginuser.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Signup:' + JSON.stringify(err, undefined, 2)); }
    });
});


router.post('/', (req, res, next) => {
    Loginuser.find({ Name: req.body.Name })
    .exec()
    .then(loginuse => {
     if(loginuse.length >=1) {// checking for one name only....
         return res.status(409).json({
         message: 'Name Already Exits'
         });

        } else {
          bcrypt.hash(req.body.Password, 10, (err, hash) => {
            if (err) {
              return res.status(500).json({
                error: err
              });
            } else {
              const loginuse = new Loginuser({
                //_id: new mongoose.Types.ObjectId(),
                Name: req.body.Name,
                Password: hash
              });
              loginuse
                .save()
                .then(result => {
                  console.log(result);
                  res.status(201).json({
                    message: " Login user created"
                  });
                })
                .catch(err => {
                  console.log(err);
                  res.status(500).json({
                    error: err
                  });
                });
            }
          });
        }
      });
  });
  router.delete('/:id', (req, res, next) => {
    Loginuser.remove({ _id: req.params.id})
      .exec()
      .then(result => {
        res.status(200).json({
          message: " Login User deleted"
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });
  
     
module.exports = router;
