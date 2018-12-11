require('./backend/config/config');
require('./backend/helper/db');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var rtsIndex = require('./backend/routes/index.routes.js')


var app = express();
    
//middleware
app.use(bodyParser.json()); 
app.use(cors());
app.use('/api', rtsIndex);

//start server
//app.listen(3000);
console.log(process.env.PORT)
app.listen  (process.env.PORT)
