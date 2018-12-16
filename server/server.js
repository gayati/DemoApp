const express = require('express');                     //web application framework-
const bodyParser = require('body-parser');
const app = express();
const url = require('./config/dbconfig');   

app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({"message": "Welcome to Your Demo App application."});
});             

app.listen(3001, () => {               //server runs on port 3001
    console.log("server is connected to 3001 ");
});
startMongo(url);                           //call for db connection


/* MONGODB CONNECTION */
function startMongo() {
    const mongoose = require('mongoose');         //requiring mongoose framework for connection
    mongoose.connect(url, { useCreateIndex: true, useNewUrlParser: true }); //used to establish connection with database
    const db = mongoose.connection;               //used to perform mongoose connection events

    db.on('error', () => {                         //throws error if connection failed
        console.error('connection error with mongodb...');
        process.exit(0);                        //stops the server if database connection fails
    })

    db.once('open', () => {                        //throws error if connection failed
        console.log('MongoDB is connected');
    })
}

app.get('/', (req, res) => {
    res.json({"message": "Welcome to your demo."});
});