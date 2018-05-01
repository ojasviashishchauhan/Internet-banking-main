var express = require('express');
var router = express.Router();
var User = require('../model/users');
//get the pages
router.get('/',function(req, res, next){
  return res.render('final',{title:'HOME'});
});
router.get('/final.html',function(req, res, next){
  return res.render('final',{title:'HOME'});
});

//get registration
router.get('/signup.html',function(req, res, next){
    return res.render('signup',{title:'signup.html'});
});

//post registration ofsignup
router.post('/signup.html', function(req, res, next){
  if(req.body.email &&
    req.body.userid &&
     req.body.password){
       if(req.body.password !== req.body.confirmpassword)
       {
         return res.send("Password donot match")
        // err.status = 400;
        // return next(err);
       }
       //create object with fporm input
       var userData = {
         email: req.body.email,
         fname: req.body.fname,
         lname: req.body.lname,
         userid: req.body.userid,
         password: req.body.password,
         daddy: req.body.daddy
         };
         // use sche,'s create method to insert document into mongo'
         User.create(userData, function(err, user){
           if(err){
             return res.send("NO DATA SAVED!! there was an error");
           }else {
             return res.send("usercreated");
             }
         });
     }
     else{
       var err = new Error('All fileds are required');
       err.status =400;
       return next(err);
     }
});
module.exports = router;
