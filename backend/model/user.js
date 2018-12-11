    var mongoose = require('mongoose');
 
    
    var userSchema = new mongoose.Schema({
        fullName : {
            type : String
        },
        email : {
            type : String
        },
        password : {
            type : String
        }
    })

   // module.exports = mongoose.model('User',userSchema);
  
    var User = mongoose.model('serverUser',userSchema);


    function registration() {

    }

    registration.prototype.createUser = function(userData,callback) {
            var newUser = new User({
                'fullName': userData.fullName,
                'email': userData.email,
                'password': userData.password
            });
    
            newUser.save(function(err, result) {
                if (err) {
                    callback(err, null);
                } else {
                    callback(null, result);
                }
            });
        } 
    


module.exports = new registration;
