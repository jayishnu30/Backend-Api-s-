const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Enquiry} = require('../models/enquiry');
//var { Enquiry } = require('../models/Enquiry');




// => localhost:3000/employees/

router.get('/', (req, res) => {
    Enquiry.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving enquiry :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var enq = new Enquiry({
    Enquiry_id: req.body.Enquiry_id,
    Service: req.body.Service,
    Budget: req.body.Budget,
    Email: req.body.Email,
    });

    enq.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in enquiry Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

        var enq = {
    Enquiry_id: req.body.Enquiry_id,
    Service: req.body.Service,
    Budget: req.body.Budget,
    Email: req.body.Email,
          
    
    };
        Enquiry.findByIdAndUpdate(req.params.id, { $set: enq }, { new: true }, (err, doc) => {
            if (!err) { res.send(doc); }
            else { console.log('Error in Enquiry Update :' + JSON.stringify(err, undefined, 2)); }
        });
    });
router.delete('/:id', (req, res) => { //Delete the 
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        Enquiry.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Enquiry Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports= router;