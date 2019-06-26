const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var { Event } = require('../models/event');

router.get('/', (req, res) => {
    Event.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Employees :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Event.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Employee :' + JSON.stringify(err, undefined, 2)); }
    });
});
router.post('/', (req, res) => {
        var event = new Event({
        Contact_email: req.body.Contact_email,
        Organization_name: req.body.Organization_name,
        Contact_person_name: req.body.Contact_person_name,
        Alternate_email_id: req.body.Alternate_email_id,
        Website: req.body.Website,
        City: req.body.City,
        Main_image: req.body.Main_image,
        Featured_image: req.body.Featured_image,
    
            });


            event.save((err, doc) => {
                if (!err) { res.send(doc); }
                else { console.log('Error in Employee Save :' + JSON.stringify(err, undefined, 2)); }
        

    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

        var event = {
            Contact_email: req.body.Contact_email,
            Organization_name: req.body.Organization_name,
            Contact_person_name: req.body.Contact_person_name,
            Alternate_email_id: req.body.Alternate_email_id,
            Website: req.body.Website,
            City: req.body.City,
            Main_image: req.body.Main_image,
            Featured_image: req.body.Featured_image,
          
    
    };
    Event.findByIdAndUpdate(req.params.id, { $set: event }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Update :' + JSON.stringify(err, undefined, 2)); }
    });
});
router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Event.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports= router;