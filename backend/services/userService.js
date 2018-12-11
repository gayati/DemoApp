const userModel = require('../model/user.js');

module.exports.signUp = function(userData,callback){
    console.log("In userservice..." + callback)
    userModel.createUser(userData, function(err,result) {
        if(err) {
            callback(err,null);
        }
        else { 
            callback(null,'Register successfully.');
            }

})
}
