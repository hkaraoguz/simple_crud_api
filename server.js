// get dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const app = express();

// parse requests
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// Fix CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

require('./document.route.js')(app);
  
// Connecting to the database
mongoose.connect("mongodb://localhost:27017/documents", {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// default route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to simple crud api demo"});
});

// listen on port 3000
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});