var express = require('express');
var router = express.Router();
var Loginadmin = require('../models/loginadmin');
var jwt = require('jsonwebtoken');

router.post('/register',  function(req,res,next){
  var loginadmin = new Loginadmin ({
    email: req.body.email,
    username: req.body.username,
    password: Loginadmin.hashPassword(req.body.password),
    creation_dt: Date.now()
  });

  let promise = loginadmin.save();

  promise.then(function(doc){
    return res.status(201).json(doc);
  })

  promise.catch(function(err){
    return res.status(501).json({message: 'Error registering user.'})
  })
})

router.post('/login', function(req,res,next){
   let promise = Loginadmin.findOne({email:req.body.email}).exec();

   promise.then(function(doc){
    if(doc) {
      if(doc.isValid(req.body.password)){
          // generate token
          let token = jwt.sign({username:doc.username},'secret', {expiresIn : '3h'});

          return res.status(200).json(token);

      } else {
        return res.status(501).json({message:' Invalid Credentials'});
      }
    }
    else {
      return res.status(501).json({message:'User email is not registered.'})
    }
   });

   promise.catch(function(err){
     return res.status(501).json({message:'Some internal error'});
   })
})


module.exports = router;