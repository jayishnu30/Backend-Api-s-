const express = require('express');
var router = express.Router();

var ObjectId = require('mongoose').Types.ObjectId;

var { Role } = require('../models/role');
//var { Event } = require('../models/event');




// => localhost:3000/employees/
router.get('/', (req, res) => {
    Role.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving User :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var rol = new Role({
    Role_id: req.body.Role,
    Role_type: req.body.Role_type
    });

    rol.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);
        var rol = {
            Role_id: req.body.Role,
            Role_type: req.body.Role_type
    };
    Role.findByIdAndUpdate(req.params.id, { $set: role }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Role Update :' + JSON.stringify(err, undefined, 2)); }
    });
});
router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Role.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Role Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports= router;