const mongoose = require('mongoose');

//const User = require('./model/user.js');

const userModel = require('../model/user.js');
const userServices = require('../services/userService.js');


module.exports.register = (req,res,next) => {
    console.log("Inside register function.");
     var user = req.body;
    //console.log(user)
    // const user = new userModel({
    // fullName :req.body.fullName,
    // email : req.body.email,
    // password : req.body.password
    // });
    userServices.signUp(user,function(err,result) {
        if(err) {
            res.json({err: err});
        }
        else {
            res.json({data: result});
        }
    })
    //user.save();
    
}


