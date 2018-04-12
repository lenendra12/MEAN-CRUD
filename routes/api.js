var express = require('express');
var router = express.Router();
var Userlist = require('./userslistModel')
var User = require('./usersModel')

router.get('/users', function(req, res, next) {
  Userlist.find({})
       .exec(function(err,users){
        if(err){
            console.log('Error retriving users')
        }else{
            res.json(users);
        }
    });
});

router.get('/users/:id',function(req,res){
  Userlist.findById(req.params.id)
       .exec(function(err,user){
        if(err){
            console.log('Error retriving users')
        }else{
            res.json(user);
        }
    });
})

router.delete('/user/:id',function(req,res){
  Userlist.findByIdAndRemove(req.params.id,function(err,user){
      if(err){
            console.log('Error deleting user')
        }else{
            res.json(user);
        }
   })
})

router.post('/create/user',function(req,res){
    var reqData = req.body.user;
    var newUser = {
        firstname : reqData.firstname,
        lastname : reqData.lastname,
        email: reqData.email,
        age : reqData.age,
        gender : reqData.gender,
        salary : reqData.salary,
        profile : reqData.profile
    }
    newUser = new Userlist(reqData);

    newUser.save(function(err,insertedUser){
        if(err){
            console.log('Error in adding user');
            res.send(err)
        }else{
            res.json(reqData);
        }
    });
})

router.put('/update/user/:id',function(req,res){
    var reqData = req.body.user;
  Userlist.findByIdAndUpdate(req.params.id,
    {
        $set:{ firstname : reqData.firstname, lastname : reqData.lastname, email: reqData.email, age : reqData.age, gender : reqData.gender, salary : reqData.salary, profile : reqData.profile }
    },
    {
        new: true
    },
    function(err,updatedVideo){
        if(err){
            console.log("Error updating video");
            res.send(err);
        }else{
            res.json(reqData)
        }
    }
   );
});

router.post('/register',function (req,res,next) {

  var reqData = req.body.data;
  var newUser = {
    firstname : reqData.firstname,
    lastname : reqData.lastname,
    email: reqData.email,
    username : req.body.username,
    password : req.body.password,
    cpassword : req.body.cpassword
  }

  newUser = new User(reqData);
  newUser.save(function (err,savedUser) {
    if(err){
      res.send(err);
  }else{
      delete newUser['password']
      delete newUser['cpassword']
      console.log(newUser)
      res.json(newUser)
    }
  })
})


module.exports = router;
