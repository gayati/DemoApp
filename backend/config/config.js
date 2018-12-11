var env = process.env.NODE_ENV || "devlopment"

var config = require('./config.json');
console.log(config)
var envConfig = config[env];
console.log(envConfig)

Object.keys(envConfig).forEach(key => process.env[key] = envConfig[key])