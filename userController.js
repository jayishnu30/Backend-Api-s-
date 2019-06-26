const express = require('express');
var router = express.Router();
//var ObjectId = require('mongoose').Types.ObjectId;

var { User} = require('../models/user');
const jwt = require('jsonwebtoken');
//var { Event } = require('../models/event');

module.exports = {
    create: function(req, res, next) {
        User.create({ Name: req.body.Name, Password: req.body.Password, Phone: req.body.Phone, Email: req.body.Email } , function (err, result) {
            if (err) 
             next(err);
            else
             res.json({status: "success", message: "User added successfully!!!", data: null});
            
          });
       },
       
       authenticate: function(req, res, next) {
        User.findOne({Email:req.body.Email}, function(err, userInfo){
            if (err) {
             next(err);
            } else {

                if(bcrypt.compareSync(req.body.Password, userInfo.Password)) {

                    const token = jwt.sign({id: userInfo._id}, req.app.get('secretKey'), { expiresIn: '1h' });
                    
                    res.json({status:"success", message: "user found!!!", data:{user: userInfo, token:token}});
                    
                    }else{
                    
                    res.json({status:"error", message: "Invalid email/password!!!", data:null});
                    
                    }
                         }
                        });
                     },
                    
                    }



// => localhost:3000/employees/
router.get('/', (req, res) => {
    User.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving User :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var use = new User({
    Name: req.body.Name,
    Password: req.body.Password,
    Phone: req.body.Phone,
    Email: req.body.Email,
    });

    use.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Save :' + JSON.stringify(err, undefined, 2)); }
    });
});
//router.post('/login', function(req, res) {
//Name = req.body.Name;
//Password = req.body.Password;
//User.findOne({Name: Name, Password: Password }, function(err, user){
  //  if(err)
    //{
      //  console.log(err);
        //return res.status(500).send();
    //}
    //if(!user)
    //{
      //  return res.status(404).send();
    //}
    //return res.status(200).send();
//})

//});
//router.get('/dashboard',function(req, res) {
    //if(!req.session.Category_id)
    //{
    
        //return res.status(404).send();
    //}
    
    //return res.status(200).send("Welcome to LOGGED API")
    //})

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

        var use = {
            Name: req.body.Name,
            Password: req.body.Password,
            Phone: req.body.Phone,
            Email: req.body.Email,
    
    };
    User.findByIdAndUpdate(req.params.id, { $set: use }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in User Update :' + JSON.stringify(err, undefined, 2)); }
    });
});
router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        User.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports= router;