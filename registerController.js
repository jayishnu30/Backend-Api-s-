const express = require('express');
var router = express.Router();
//var ObjectId = require('mongoose').Types.ObjectId;
//var bcrypt = require('bcrypt');
var { Registeruser } = require('../models/registeruser');

router.get('/', (req, res) => {
    Registeruser.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Signup:' + JSON.stringify(err, undefined, 2)); }
    });
});

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

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

        var registeruse = {
    Name: req.body.Name,
    Password: req.body.Password,
    
    Phone:req.body.Phone,
    Email: req.body.Email,
          
    
    };
        Registeruser.findByIdAndUpdate(req.params.id, { $set: registeruse }, { new: true }, (err, doc) => {
            if (!err) { res.send(doc); }
            else { console.log('Error in Register Update :' + JSON.stringify(err, undefined, 2)); }
        });
    });
router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        Registeruser.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Registered user Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports= router;
