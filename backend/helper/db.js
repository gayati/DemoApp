const mongoose  = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, (err) => {
    if(!err) {console.log("Mongodb connection sucseed");}
    else { console.log('Err in connection' + JSON.stringify(err,undefined,2));}
})   